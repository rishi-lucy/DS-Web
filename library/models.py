import secrets
from datetime import datetime, timezone

from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash

from library import db


class Student(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(254), unique=True, nullable=False, index=True)
    student_id = db.Column(db.String(40), unique=True, nullable=False)
    department = db.Column(db.String(80), nullable=False)
    year = db.Column(db.String(20), nullable=False)
    branch = db.Column(db.String(80), nullable=False, default="Data Science")
    section = db.Column(db.String(20), nullable=False, default="3")
    subject = db.Column(db.String(80), nullable=False, default="Data Science")
    faculty_name = db.Column(db.String(120), nullable=False, default="S Bosu Babu")
    faculty_designation = db.Column(
        db.String(120), nullable=False, default="Assistant Professor"
    )
    profile_image = db.Column(db.String(255))
    reminders_enabled = db.Column(db.Boolean, nullable=False, default=True)
    reminder_time = db.Column(db.String(5), nullable=False, default="18:00")
    quiet_start = db.Column(db.String(5), nullable=False, default="22:00")
    quiet_end = db.Column(db.String(5), nullable=False, default="07:00")
    password_hash = db.Column(db.String(255), nullable=False)
    reset_token_version = db.Column(
        db.String(32), nullable=False, default=lambda: secrets.token_hex(16)
    )
    created_at = db.Column(
        db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc)
    )

    def set_password(self, password: str) -> None:
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password_hash, password)


class LearningModule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(80), unique=True, nullable=False)
    title = db.Column(db.String(160), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    subject = db.Column(db.String(80), nullable=False)
    content_json = db.Column(db.Text, nullable=False)
    difficulty = db.Column(db.String(20), nullable=False, default="Beginner")
    estimated_minutes = db.Column(db.Integer, nullable=False, default=45)
    is_published = db.Column(db.Boolean, nullable=False, default=True)
    is_faculty_approved = db.Column(db.Boolean, nullable=False, default=True)
    order_index = db.Column(db.Integer, nullable=False, default=0)


class ModuleDraft(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(160), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    subject = db.Column(db.String(80), nullable=False)
    content_json = db.Column(db.Text, nullable=False)
    difficulty = db.Column(db.String(20), nullable=False)
    estimated_minutes = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), nullable=False, default="pending")
    created_by = db.Column(db.String(254), nullable=False)
    reviewed_by = db.Column(db.String(254))
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))


class ModuleProgress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    module_slug = db.Column(db.String(80), nullable=False)
    status = db.Column(db.String(20), nullable=False, default="not_started")
    percentage = db.Column(db.Integer, nullable=False, default=0)
    time_spent_minutes = db.Column(db.Integer, nullable=False, default=0)
    started_at = db.Column(db.DateTime(timezone=True))
    completed_at = db.Column(db.DateTime(timezone=True))
    last_accessed = db.Column(db.DateTime(timezone=True))
    __table_args__ = (db.UniqueConstraint("student_id", "module_slug"),)


class LearningActivity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    activity_type = db.Column(db.String(40), nullable=False)
    module_slug = db.Column(db.String(80))
    resource_slug = db.Column(db.String(80))
    duration_minutes = db.Column(db.Integer, nullable=False, default=0)
    occurred_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), index=True)


class StudyPlanItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    plan_date = db.Column(db.Date, nullable=False, default=lambda: datetime.now(timezone.utc).date(), index=True)
    title = db.Column(db.String(160), nullable=False)
    reason = db.Column(db.String(255), nullable=False)
    estimated_minutes = db.Column(db.Integer, nullable=False)
    difficulty = db.Column(db.String(20), nullable=False, default="Beginner")
    module_slug = db.Column(db.String(80))
    completed = db.Column(db.Boolean, nullable=False, default=False)
    __table_args__ = (db.UniqueConstraint("student_id", "plan_date", "title"),)


class StudentNotification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    title = db.Column(db.String(120), nullable=False)
    message = db.Column(db.String(500), nullable=False)
    notification_type = db.Column(db.String(30), nullable=False, default="info")
    is_read = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), index=True)


class QuizAttempt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    module_slug = db.Column(db.String(80), nullable=False, index=True)
    score = db.Column(db.Integer, nullable=False)
    total_questions = db.Column(db.Integer, nullable=False)
    answers_json = db.Column(db.Text, nullable=False, default="[]")
    attempted_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), index=True)


class PersonalModule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    title = db.Column(db.String(160), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    topics = db.Column(db.String(1000), nullable=False)
    difficulty = db.Column(db.String(30), nullable=False)
    depth = db.Column(db.String(30), nullable=False)
    language = db.Column(db.String(30), nullable=False)
    options_json = db.Column(db.Text, nullable=False, default="{}")
    content_json = db.Column(db.Text, nullable=False)
    is_bookmarked = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class FacultyMaterial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_by = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    title = db.Column(db.String(160), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    module_number = db.Column(db.String(30))
    topics = db.Column(db.String(1000), nullable=False, default="")
    description = db.Column(db.String(1000), nullable=False)
    department = db.Column(db.String(80), nullable=False, default="all")
    section = db.Column(db.String(20), nullable=False, default="all")
    academic_year = db.Column(db.String(40), nullable=False, default="")
    deadline = db.Column(db.Date)
    reference_url = db.Column(db.String(1000))
    attachment_name = db.Column(db.String(255))
    attachment_path = db.Column(db.String(255))
    extracted_text = db.Column(db.Text, nullable=False, default="")
    status = db.Column(db.String(20), nullable=False, default="draft", index=True)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class FacultyExperiment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_by = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    experiment_number = db.Column(db.String(30), nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(160), nullable=False)
    department = db.Column(db.String(80), nullable=False, default="all")
    section = db.Column(db.String(20), nullable=False, default="all")
    deadline = db.Column(db.Date)
    content_json = db.Column(db.Text, nullable=False)
    attachment_name = db.Column(db.String(255))
    attachment_path = db.Column(db.String(255))
    status = db.Column(db.String(20), nullable=False, default="draft", index=True)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    __table_args__ = (db.UniqueConstraint("created_by", "experiment_number", "subject"),)


class LearningContentEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    parent_type = db.Column(db.String(30), nullable=False, index=True)
    parent_id = db.Column(db.String(100), nullable=False, index=True)
    concept_name = db.Column(db.String(160), nullable=False, default="")
    owner_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    visibility = db.Column(db.String(20), nullable=False, default="personal", index=True)
    title = db.Column(db.String(160), nullable=False)
    content_type = db.Column(db.String(30), nullable=False, default="notes")
    content_json = db.Column(db.Text, nullable=False, default="{}")
    attachment_name = db.Column(db.String(255))
    attachment_path = db.Column(db.String(255))
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class MaterialProgress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    material_type = db.Column(db.String(30), nullable=False)
    material_id = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), nullable=False, default="not_started")
    percentage = db.Column(db.Integer, nullable=False, default=0)
    time_spent_minutes = db.Column(db.Integer, nullable=False, default=0)
    markers_json = db.Column(db.Text, nullable=False, default="{}")
    last_accessed = db.Column(db.DateTime(timezone=True))
    completed_at = db.Column(db.DateTime(timezone=True))
    __table_args__ = (db.UniqueConstraint("student_id", "material_type", "material_id"),)


class MaterialActivity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    material_type = db.Column(db.String(30), nullable=False)
    material_id = db.Column(db.Integer, nullable=False)
    activity_type = db.Column(db.String(40), nullable=False)
    duration_minutes = db.Column(db.Integer, nullable=False, default=0)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), index=True)


class MaterialBookmark(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    material_type = db.Column(db.String(30), nullable=False)
    material_id = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
    __table_args__ = (db.UniqueConstraint("student_id", "material_type", "material_id"),)


class PersonalResource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    title = db.Column(db.String(160), nullable=False)
    description = db.Column(db.String(1000), nullable=False, default="")
    resource_url = db.Column(db.String(1000))
    attachment_name = db.Column(db.String(255))
    attachment_path = db.Column(db.String(255))
    extracted_text = db.Column(db.Text, nullable=False, default="")
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class PersonalModuleQuizAttempt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("student.id"), nullable=False, index=True)
    personal_module_id = db.Column(db.Integer, db.ForeignKey("personal_module.id"), nullable=False, index=True)
    score = db.Column(db.Integer, nullable=False)
    total_questions = db.Column(db.Integer, nullable=False)
    answers_json = db.Column(db.Text, nullable=False)
    attempted_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc), index=True)
