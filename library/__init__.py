import os
import secrets
from pathlib import Path

from flask import Flask
from flask_login import LoginManager, current_user
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from sqlalchemy import inspect, text

db = SQLAlchemy()
login_manager = LoginManager()
csrf = CSRFProtect()
mail = Mail()


def create_app(test_config: dict | None = None) -> Flask:
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY=os.environ.get("SECRET_KEY") or secrets.token_hex(32),
        SQLALCHEMY_DATABASE_URI=os.environ.get(
            "DATABASE_URL", "sqlite:///library.sqlite"
        ),
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        SESSION_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SAMESITE="Lax",
        REMEMBER_COOKIE_HTTPONLY=True,
        REMEMBER_COOKIE_SAMESITE="Lax",
        WTF_CSRF_TIME_LIMIT=3600,
        MAIL_SERVER=os.environ.get("MAIL_SERVER"),
        MAIL_PORT=int(os.environ.get("MAIL_PORT", "587")),
        MAIL_USE_TLS=os.environ.get("MAIL_USE_TLS", "true").lower() == "true",
        MAIL_USE_SSL=os.environ.get("MAIL_USE_SSL", "false").lower() == "true",
        MAIL_USERNAME=os.environ.get("MAIL_USERNAME"),
        MAIL_PASSWORD=os.environ.get("MAIL_PASSWORD"),
        MAIL_DEFAULT_SENDER=os.environ.get("MAIL_DEFAULT_SENDER"),
        FACULTY_EMAILS=os.environ.get("FACULTY_EMAILS", ""),
        OPENAI_API_KEY=os.environ.get("OPENAI_API_KEY"),
        GEMINI_API_KEY=os.environ.get("GEMINI_API_KEY"),
        LIBRA_COPILOT_ENDPOINT=os.environ.get("LIBRA_COPILOT_ENDPOINT"),
        LIBRA_COPILOT_API_KEY=os.environ.get("LIBRA_COPILOT_API_KEY"),
        LIBRA_AI_MODEL=os.environ.get("LIBRA_AI_MODEL", "gpt-4o-mini"),
        LIBRA_GEMINI_MODEL=os.environ.get("LIBRA_GEMINI_MODEL", "gemini-2.0-flash"),
        MAX_CONTENT_LENGTH=26 * 1024 * 1024,
        LEARNING_MATERIAL_UPLOAD_FOLDER=os.environ.get("LEARNING_MATERIAL_UPLOAD_FOLDER"),
        MAX_LEARNING_MATERIAL_FILE_SIZE=25 * 1024 * 1024,
    )
    if test_config:
        app.config.update(test_config)

    if os.environ.get("APP_ENV", "").lower() == "production":
        if not os.environ.get("SECRET_KEY"):
            raise RuntimeError("Set SECRET_KEY before starting in production.")
        app.config["SESSION_COOKIE_SECURE"] = True
        app.config["REMEMBER_COOKIE_SECURE"] = True

    Path(app.instance_path).mkdir(parents=True, exist_ok=True)
    db.init_app(app)
    login_manager.init_app(app)
    csrf.init_app(app)
    mail.init_app(app)
    login_manager.login_view = "library.dashboard"
    login_manager.login_message = "Student account features are unavailable in public browsing mode."
    login_manager.login_message_category = "info"

    from library.models import QuizAttempt, Student
    from library.routes import auth, library as library_routes

    login_manager.user_loader(lambda student_id: db.session.get(Student, int(student_id)))
    @app.context_processor
    def inject_student_context() -> dict[str, int | bool]:
        count = 0
        faculty_emails = {
            email.strip().casefold()
            for email in app.config.get("FACULTY_EMAILS", "").split(",")
            if email.strip()
        }
        is_faculty = current_user.is_authenticated and current_user.email.casefold() in faculty_emails
        if current_user.is_authenticated:
            from library.models import StudentNotification

            count = StudentNotification.query.filter_by(
                student_id=current_user.id, is_read=False
            ).count()
        return {"unread_notifications": count, "is_faculty_user": is_faculty}

    app.register_blueprint(auth)
    app.register_blueprint(library_routes)

    with app.app_context():
        db.create_all()
        student_table = Student.__tablename__
        columns = {column["name"] for column in inspect(db.engine).get_columns(student_table)}
        additions = {
            "branch": "VARCHAR(80) NOT NULL DEFAULT 'Data Science'",
            "section": "VARCHAR(20) NOT NULL DEFAULT '3'",
            "subject": "VARCHAR(80) NOT NULL DEFAULT 'Data Science'",
            "faculty_name": "VARCHAR(120) NOT NULL DEFAULT 'S Bosu Babu'",
            "faculty_designation": "VARCHAR(120) NOT NULL DEFAULT 'Assistant Professor'",
            "profile_image": "VARCHAR(255)",
            "reminders_enabled": "BOOLEAN NOT NULL DEFAULT 1",
            "reminder_time": "VARCHAR(5) NOT NULL DEFAULT '18:00'",
            "quiet_start": "VARCHAR(5) NOT NULL DEFAULT '22:00'",
            "quiet_end": "VARCHAR(5) NOT NULL DEFAULT '07:00'",
        }
        with db.engine.begin() as connection:
            for name, definition in additions.items():
                if name not in columns:
                    connection.execute(
                        text(f"ALTER TABLE {student_table} ADD COLUMN {name} {definition}")
                    )
            connection.execute(
                text(
                    f"UPDATE {student_table} SET department = 'CSE' "
                    "WHERE department = 'Data Science'"
                )
            )
            connection.execute(
                text(
                    f"UPDATE {student_table} SET faculty_name = 'S Bosu Babu' "
                    "WHERE faculty_name = 'Bosu Babu'"
                )
            )
        quiz_columns = {
            column["name"]
            for column in inspect(db.engine).get_columns(QuizAttempt.__tablename__)
        }
        if "answers_json" not in quiz_columns:
            with db.engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE quiz_attempt ADD COLUMN answers_json "
                        "VARCHAR DEFAULT '[]' NOT NULL"
                    )
                )
        from library.curriculum import seed_curriculum

        seed_curriculum()

    return app
