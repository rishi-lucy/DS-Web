import json
import sqlite3
import tempfile
import unittest
from contextlib import closing
from io import BytesIO
from pathlib import Path
from unittest.mock import patch
from urllib.parse import urlparse

from library import create_app, db
from library.models import (
    FacultyExperiment,
    FacultyMaterial,
    LearningContentEntry,
    LearningModule,
    MaterialProgress,
    ModuleDraft,
    ModuleProgress,
    PersonalModule,
    PersonalModuleQuizAttempt,
    PersonalResource,
    Student,
    StudyPlanItem,
)


class StudentLibraryTests(unittest.TestCase):
    def setUp(self):
        self.upload_directory = tempfile.TemporaryDirectory()
        self.app = create_app(
            {
                "TESTING": True,
                "SECRET_KEY": "test-secret-key",
                "SQLALCHEMY_DATABASE_URI": "sqlite://",
                "WTF_CSRF_ENABLED": False,
                "MAIL_SERVER": "smtp.example.test",
                "MAIL_DEFAULT_SENDER": "library@mbu.asia",
                "LEARNING_MATERIAL_UPLOAD_FOLDER": self.upload_directory.name,
            }
        )
        self.client = self.app.test_client()
        self.student_data = {
            "full_name": "Asha Student",
            "email": "asha.student@mbu.asia",
            "student_id": "DS2026-014",
            "department": "CSE",
            "section": "3",
            "year": "2nd Year",
            "password": "Research!2026",
            "confirm_password": "Research!2026",
        }

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()
        self.upload_directory.cleanup()

    def create_student(self, data=None):
        student_data = data or self.student_data
        with self.app.app_context():
            student = Student(
                full_name=student_data["full_name"],
                email=student_data["email"].lower(),
                student_id=student_data["student_id"],
                department=student_data["department"],
                year=student_data["year"],
                section=student_data["section"],
                subject="Data Science",
            )
            student.set_password(student_data["password"])
            db.session.add(student)
            db.session.commit()
            return student.id

    def sign_in(self, client=None, data=None):
        active_client = client or self.client
        student_email = (data or self.student_data)["email"].lower()
        with self.app.app_context():
            student = Student.query.filter_by(email=student_email).one()
            student_id = str(student.id)
        with active_client.session_transaction() as session:
            session["_user_id"] = student_id
            session["_fresh"] = True

    def test_public_library_and_protected_student_features(self):
        dashboard = self.client.get("/dashboard")
        self.assertEqual(dashboard.status_code, 200)
        self.assertIn("Explore Data Science", dashboard.get_data(as_text=True))
        public_home = dashboard.get_data(as_text=True)
        self.assertIn('aria-label="Modules"', public_home)
        self.assertIn('aria-label="Resources"', public_home)
        self.assertNotIn("My Learning Materials", public_home)
        self.assertNotIn("LIBRA AI", public_home)
        module_page = self.client.get("/modules/introduction-to-data-science")
        self.assertEqual(module_page.status_code, 200)
        self.assertIn("Public curriculum · progress is not recorded", module_page.get_data(as_text=True))
        self.assertNotIn("Add Content to", module_page.get_data(as_text=True))
        self.assertEqual(self.client.get("/labs/python-data-analysis").status_code, 200)
        self.assertEqual(self.client.get("/resources/python").status_code, 200)
        self.assertEqual(
            self.client.get("/resources/python-python-programming").status_code,
            200,
        )
        self.assertEqual(self.client.get("/learning-materials/my-ai/create").status_code, 302)
        self.assertEqual(
            urlparse(self.client.get("/learning-materials").headers["Location"]).path,
            "/dashboard",
        )
        self.assertEqual(
            urlparse(self.client.get("/profile").headers["Location"]).path,
            "/dashboard",
        )
        self.assertEqual(self.client.post("/labs/python-data-analysis").status_code, 401)
        self.assertEqual(self.client.post("/modules/introduction-to-data-science/complete").status_code, 302)

        self.create_student()
        self.sign_in()
        self.assertIn("Welcome, Student!", self.client.get("/dashboard").get_data(as_text=True))

        response = self.client.post("/logout")
        self.assertEqual(response.status_code, 302)
        self.assertEqual(self.client.get("/dashboard").status_code, 200)

    def test_landing_renders_branded_entry_and_csrf_protects_forms(self):
        landing = self.client.get("/")
        self.assertEqual(landing.status_code, 200)
        landing_html = landing.get_data(as_text=True)
        self.assertIn("STUDENT", landing_html)
        self.assertIn("DIGITAL LIBRARY", landing_html)
        self.assertNotIn("landing-photo", landing_html)
        self.assertNotIn("landing-shade", landing_html)
        self.assertIn("Explore Library", landing_html)
        self.assertNotIn("Create Student Account", landing_html)
        self.assertEqual(self.client.get("/login").headers["Location"], "/dashboard")
        self.assertEqual(self.client.get("/register").headers["Location"], "/dashboard")
        self.assertNotIn("data-theme-toggle", landing_html)
        for image_name in ("mbu-campus.png", "mbu-logo.png", "student-profile.png"):
            response = self.client.get(f"/static/images/{image_name}")
            self.assertEqual(response.status_code, 200)
            response.close()

        self.app.config["WTF_CSRF_ENABLED"] = True
        rejected = self.client.post("/register", data=self.student_data)
        self.assertEqual(rejected.status_code, 400)
        with self.app.app_context():
            self.assertEqual(Student.query.count(), 0)

    def test_login_and_registration_endpoints_are_disabled(self):
        invalid_email = {**self.student_data, "email": "asha@example.com"}
        response = self.client.post("/register", data=invalid_email)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(
            self.client.post("/login", data={"email": self.student_data["email"], "password": self.student_data["password"]}).status_code,
            302,
        )
        with self.app.app_context():
            self.assertEqual(Student.query.count(), 0)

    def test_signed_in_students_can_browse_and_update_profile(self):
        self.create_student()
        self.sign_in()

        dashboard = self.client.get("/dashboard").get_data(as_text=True)
        self.assertNotIn("data-theme-toggle", dashboard)
        self.assertIn('src="/static/images/student-profile.png"', dashboard)
        for subject in ("Python for Data Science", "Statistics for Data Science", "Machine Learning", "Deep Learning"):
            self.assertIn(subject, dashboard)
        self.assertIn("Asha", dashboard)
        self.assertIn("DS2026-014", dashboard)
        self.assertEqual(self.client.get("/dashboard?section=labs").status_code, 200)
        labs_page = self.client.get("/dashboard?section=labs").get_data(as_text=True)
        self.assertIn("K-Means Clustering", labs_page)
        self.assertIn("EXPERIMENT 12", labs_page)
        self.assertIn("Google Colab", self.client.get("/dashboard?section=tools").get_data(as_text=True))
        self.assertIn("Previous Year Papers", self.client.get("/dashboard?section=resources").get_data(as_text=True))
        search_results = self.client.get("/dashboard?q=Python").get_data(as_text=True)
        self.assertIn("Python Data Analysis", search_results)
        self.assertIn("NumPy", search_results)

        detail = self.client.get("/resources/python")
        self.assertEqual(detail.status_code, 200)
        self.assertIn("Python for Data Science", detail.get_data(as_text=True))
        self.assertEqual(self.client.get("/resources/unknown").status_code, 404)

        filtered = self.client.get("/resources?kind=Books")
        self.assertEqual(filtered.status_code, 200)
        self.assertIn("Learning Resources", filtered.get_data(as_text=True))

        updated = self.client.post(
            "/profile",
            data={
                "full_name": "Asha Rao",
                "department": "CSE",
                "section": "4",
                "year": "3rd Year",
            },
        )
        self.assertEqual(updated.status_code, 302)
        with self.app.app_context():
            student = Student.query.filter_by(email=self.student_data["email"]).one()
            self.assertEqual(student.full_name, "Asha Rao")
            self.assertEqual(student.year, "3rd Year")
            self.assertEqual(student.section, "4")

    def test_home_shows_student_details_and_shared_pages_hide_them(self):
        self.create_student()
        self.sign_in()

        home = self.client.get("/dashboard").get_data(as_text=True)
        self.assertIn("student-menu-avatar", home)
        self.assertIn('src="/static/images/student-profile.png" alt="Student profile photo"', home)
        self.assertIn("dashboard-layout-home", home)
        self.assertIn("YOUR ACADEMIC DETAILS", home)
        self.assertIn("Asha Student", home)
        self.assertIn("DS2026-014", home)
        self.assertIn("Data Science", home)
        self.assertIn("Digital Library", home)
        self.assertIn("My Registered Courses", home)
        self.assertIn("REGISTERED COURSE", home)
        self.assertIn("S Bosu Babu", home)
        self.assertIn("My Registered Courses", home)
        self.assertIn("TODAY'S STUDY PLAN", home)
        self.assertIn('aria-label="Notifications', home)
        self.assertIn("notification-nav-link", home)
        self.assertNotIn("notification-label", home)
        self.assertNotIn("class=\"notification-link\"", home)
        self.assertIn('<html lang="en" data-theme="light">', home)
        self.assertIn('aria-label="Open library navigation"', home)
        self.assertIn('aria-label="Open LIBRA AI study assistant"', home)
        self.assertIn('href="/dashboard?assistant=open"', home)

        modules = self.client.get("/dashboard?section=modules").get_data(as_text=True)
        self.assertNotIn("dashboard-layout-home", modules)
        self.assertNotIn("student-profile-panel", modules)
        self.assertNotIn("Asha Student", modules)
        self.assertNotIn("DS2026-014", modules)
        self.assertIn("Data Science", modules)
        self.assertIn("Digital Library", modules)
        profile_page = self.client.get("/profile").get_data(as_text=True)
        self.assertNotIn("student-profile-panel", profile_page)
        resource_page = self.client.get("/resources/python").get_data(as_text=True)
        self.assertNotIn("student-profile-panel", resource_page)

        materials_page = self.client.get("/learning-materials").get_data(as_text=True)
        self.assertIn('class="library-nav-link is-active" href="/learning-materials"', materials_page)
        self.assertIn('aria-label="Home"', materials_page)
        self.assertIn('aria-label="Modules"', materials_page)
        self.assertIn('aria-label="Lab Experiments"', materials_page)
        self.assertNotIn("student-profile-panel", materials_page)

        self.client.post("/logout")
        landing = self.client.get("/").get_data(as_text=True)
        login_page = self.client.get("/login")
        self.assertIn('<strong>Student</strong>', landing)
        self.assertIn("<span>DIGITAL LIBRARY</span>", landing)
        self.assertEqual(login_page.status_code, 302)
        public_home = self.client.get("/dashboard").get_data(as_text=True)
        self.assertIn("PUBLIC LIBRARY", public_home)
        self.assertNotIn("student-menu-avatar", public_home)
        self.assertNotIn("Asha Student", public_home)
        self.assertNotIn("My Learning Materials", public_home)
        self.assertNotIn("LIBRA AI", public_home)
        self.assertNotIn('<img class="brand-logo"', landing)

    def test_modules_track_student_progress_sessions_and_notifications(self):
        self.create_student()
        self.sign_in()

        module = self.client.get("/modules/introduction-to-data-science")
        self.assertEqual(module.status_code, 200)
        self.assertIn("Data-science lifecycle", module.get_data(as_text=True))
        self.assertIn("Learning objectives", module.get_data(as_text=True))

        saved_time = self.client.post(
            "/learning/record-session/introduction-to-data-science",
            data={"duration_minutes": "30"},
        )
        self.assertEqual(saved_time.status_code, 302)
        too_short = self.client.post(
            "/learning/record-session/introduction-to-data-science",
            data={"duration_minutes": "5"},
            follow_redirects=True,
        )
        self.assertIn("between 15 and 240 minutes", too_short.get_data(as_text=True))

        quiz = self.client.post(
            "/modules/introduction-to-data-science/quiz",
            data={"answer_0": "0", "answer_1": "1"},
            follow_redirects=True,
        )
        self.assertIn("Quiz submitted: 2 of 2 correct.", quiz.get_data(as_text=True))
        self.assertIn("Your latest score: 2 of 2", quiz.get_data(as_text=True))
        self.assertIn("JSON has labels and structure", quiz.get_data(as_text=True))
        completed = self.client.post(
            "/modules/introduction-to-data-science/complete"
        )
        self.assertEqual(completed.status_code, 302)
        analytics = self.client.get("/learning/analytics")
        self.assertEqual(analytics.status_code, 200)
        self.assertIn("100%", analytics.get_data(as_text=True))
        self.assertIn("30m", analytics.get_data(as_text=True))
        self.assertIn("1 day", analytics.get_data(as_text=True))

        notifications = self.client.get("/notifications")
        self.assertIn("Module completed", notifications.get_data(as_text=True))
        self.assertEqual(self.client.post("/notifications/read-all").status_code, 302)
        self.assertIn("Read", self.client.get("/notifications").get_data(as_text=True))

        second_client = self.app.test_client()
        second_student = {
            **self.student_data,
            "full_name": "Other Student",
            "email": "other.student@mbu.asia",
            "student_id": "DS2026-016",
            "section": "4",
        }
        self.create_student(second_student)
        self.sign_in(second_client, second_student)
        second_progress = second_client.get("/modules/introduction-to-data-science")
        self.assertIn("10% complete", second_progress.get_data(as_text=True))
        self.assertNotIn("100% complete", second_progress.get_data(as_text=True))
    def test_resource_detail_completion_and_student_dashboard_plan(self):
        self.create_student()
        self.sign_in()

        dashboard = self.client.get("/dashboard")
        self.assertIn("TODAY'S STUDY PLAN", dashboard.get_data(as_text=True))
        with self.app.app_context():
            plan_item = StudyPlanItem.query.filter_by(student_id=1).first()
            self.assertIsNotNone(plan_item)
            plan_item_id = plan_item.id
        self.assertEqual(
            self.client.post(f"/learning/plan/{plan_item_id}/complete").status_code,
            302,
        )
        with self.app.app_context():
            self.assertIsNotNone(
                ModuleProgress.query.filter_by(
                    student_id=1, module_slug="introduction-to-data-science"
                ).first()
            )
        category = self.client.get("/resources/python")
        self.assertIn("/resources/python-python-programming", category.get_data(as_text=True))
        detail = self.client.get("/resources/python-python-programming")
        self.assertEqual(detail.status_code, 200)
        self.assertIn("Study prompt", detail.get_data(as_text=True))
        complete = self.client.post("/resources/python-python-programming")
        self.assertEqual(complete.status_code, 302)
        self.assertIn(
            "completed",
            self.client.get("/resources/python-python-programming").get_data(as_text=True).lower(),
        )
        lab = self.client.get("/labs/python-data-analysis")
        self.assertEqual(lab.status_code, 200)
        self.assertIn("Suggested workflow", lab.get_data(as_text=True))
        self.assertEqual(self.client.post("/labs/python-data-analysis").status_code, 302)
        analytics = self.client.get("/learning/analytics").get_data(as_text=True)
        self.assertIn("1 / 12", analytics)

    def test_faculty_drafts_are_restricted_and_publish_only_after_review(self):
        self.create_student()
        self.sign_in()
        self.assertEqual(self.client.get("/faculty/modules").status_code, 403)

        self.app.config["FACULTY_EMAILS"] = self.student_data["email"]
        faculty_page = self.client.get("/faculty/modules")
        self.assertEqual(faculty_page.status_code, 200)
        self.assertIn("copies a scaffold for faculty editing", faculty_page.get_data(as_text=True))
        created = self.client.post(
            "/faculty/modules",
            data={
                "source_module": "statistics-for-data-science",
                "topic": "Probability distributions",
                "title": "Faculty-reviewed Probability Supplement",
                "description": "A reviewed extension of the statistics curriculum.",
            },
        )
        self.assertEqual(created.status_code, 302)
        with self.app.app_context():
            draft = ModuleDraft.query.filter_by(title="Faculty-reviewed Probability Supplement").one()
            draft_id = draft.id
            content_json = draft.content_json
        self.assertEqual(
            self.client.get("/modules/faculty-reviewed-probability-supplement").status_code,
            404,
        )
        published = self.client.post(
            f"/faculty/drafts/{draft_id}",
            data={
                "title": "Faculty-reviewed Probability Supplement",
                "description": "A reviewed extension of the statistics curriculum.",
                "content_json": content_json,
            },
        )
        self.assertEqual(published.status_code, 302)
        with self.app.app_context():
            course = LearningModule.query.filter_by(
                slug="faculty-reviewed-probability-supplement"
            ).one()
            draft = db.session.get(ModuleDraft, draft_id)
            self.assertTrue(course.is_faculty_approved)
            self.assertEqual(draft.status, "approved")
        self.assertEqual(
            self.client.get("/modules/faculty-reviewed-probability-supplement").status_code,
            200,
        )

    def test_daily_reminders_respect_settings_and_generate_once(self):
        self.create_student()
        self.sign_in()
        settings = self.client.post(
            "/settings/reminders",
            data={
                "reminders_enabled": "on",
                "reminder_time": "00:00",
                "quiet_start": "00:00",
                "quiet_end": "00:00",
            },
        )
        self.assertEqual(settings.status_code, 302)
        self.client.get("/dashboard")
        self.client.get("/dashboard")
        with self.app.app_context():
            from library.models import StudentNotification

            reminders = StudentNotification.query.filter_by(
                student_id=1, notification_type="reminder"
            ).all()
            self.assertEqual(len(reminders), 1)
        invalid = self.client.post(
            "/settings/reminders",
            data={
                "reminder_time": "not-a-time",
                "quiet_start": "22:00",
                "quiet_end": "07:00",
            },
            follow_redirects=True,
        )
        self.assertIn("valid 24-hour times", invalid.get_data(as_text=True))
        disabled = self.client.post(
            "/settings/reminders",
            data={
                "reminder_time": "18:00",
                "quiet_start": "22:00",
                "quiet_end": "07:00",
            },
        )
        self.assertEqual(disabled.status_code, 302)
        with self.app.app_context():
            student = Student.query.filter_by(email=self.student_data["email"]).one()
            self.assertFalse(student.reminders_enabled)

    def test_configured_ai_provider_errors_are_reported_and_scoped(self):
        self.create_student()
        self.sign_in()
        missing_key = self.client.post(
            "/api/libra",
            json={"message": "Explain statistics", "provider": "chatgpt"},
        )
        self.assertEqual(missing_key.status_code, 503)
        self.assertIn("OPENAI_API_KEY", missing_key.get_json()["error"])

    def test_libra_is_login_protected_and_discloses_demo_provider(self):
        self.assertEqual(
            self.client.post("/api/libra", json={"message": "Find a Module"}).status_code,
            302,
        )
        self.create_student()
        self.sign_in()
        response = self.client.post(
            "/api/libra",
            json={"message": "Where can I find Machine Learning?", "provider": "gemini"},
        )
        self.assertEqual(response.status_code, 503)
        self.assertIn("GEMINI_API_KEY", response.get_json()["error"])
        demo_response = self.client.post(
            "/api/libra",
            json={"message": "Where can I find Machine Learning?", "provider": "demo"},
        )
        self.assertEqual(demo_response.status_code, 200)
        result = demo_response.get_json()
        self.assertIn("Module 6", result["reply"])
        self.assertEqual(result["provider"], "demo")
        self.assertIn("no external AI provider is connected", result["notice"])
        concept_reply = self.client.post(
            "/api/libra",
            json={"message": "Explain supervised learning", "provider": "demo"},
        ).get_json()["reply"]
        self.assertIn("known answers", concept_reply)

    def test_private_ai_modules_generate_edit_bookmark_quiz_and_enforce_owner_scope(self):
        self.create_student()
        self.sign_in()
        page = self.client.get("/learning-materials")
        self.assertEqual(page.status_code, 200)
        self.assertIn("My Learning Materials", page.get_data(as_text=True))
        self.assertIn("+ Create My Own Module", page.get_data(as_text=True))
        self.assertEqual(self.client.get("/learning-materials/my-ai/create").status_code, 200)
        self.app.config["OPENAI_API_KEY"] = None
        no_provider = self.client.post(
            "/learning-materials/my-ai/create",
            data={
                "subject": "Data Science", "title": "Needs a provider",
                "topics": "Logistic Regression", "difficulty": "Intermediate",
                "depth": "Detailed Notes", "language": "Python",
                "provider": "chatgpt",
            },
            follow_redirects=True,
        )
        self.assertIn("Set OPENAI_API_KEY", no_provider.get_data(as_text=True))
        with self.app.app_context():
            self.assertEqual(PersonalModule.query.count(), 0)

        payload = {
            "introduction": "Exact grounded introduction.",
            "learning_objectives": ["Explain logistic regression."],
            "prerequisites": ["Basic probability."],
            "topics": [
                {"title": "Logistic Regression", "explanation": "Estimates class probabilities."},
                {"title": "Decision Boundary", "explanation": "Separates predicted classes."},
            ],
            "definitions": [],
            "formulas": ["p = 1 / (1 + exp(-z))"],
            "examples": [],
            "diagrams": [
                {"title": "Model flow", "description": "Train and predict.", "flow_steps": ["Data", "Model", "Class"], "mermaid": ""}
            ],
            "applications": ["Risk estimation."],
            "code_examples": [],
            "exercises": ["Fit a classifier."],
            "mcqs": [
                {"question": "Which link maps scores to probabilities?", "choices": ["Sigmoid", "ReLU"], "answer": 0, "explanation": "The sigmoid maps to (0, 1)."},
                {"question": "What does a classifier predict?", "choices": ["A class", "A page"], "answer": 0, "explanation": "Classification predicts a category."},
            ],
            "interview_questions": ["Explain logistic regression."],
            "revision_notes": ["Model class probabilities."],
            "next_topics": ["Regularization"],
            "references": [{"title": "scikit-learn user guide", "url": "https://scikit-learn.org/stable/"}],
        }
        with patch(
            "library.routes._configured_ai_completion",
            return_value=json.dumps(payload),
        ) as generate:
            created = self.client.post(
                "/learning-materials/my-ai/create",
                data={
                    "subject": "Data Science",
                    "title": "Logistic Regression Study",
                    "topics": "Logistic Regression, Decision Boundary",
                    "difficulty": "Intermediate",
                    "depth": "In-Depth Preparation",
                    "language": "Python",
                    "provider": "chatgpt",
                    "include_diagrams": "on",
                    "include_examples": "on",
                    "include_quiz": "on",
                    "include_interview": "on",
                },
            )
        self.assertEqual(created.status_code, 302)
        generate.assert_called_once()
        module_id = int(urlparse(created.headers["Location"]).path.rsplit("/", 1)[1])
        detail = self.client.get(created.headers["Location"])
        self.assertEqual(detail.status_code, 200)
        self.assertIn("AI-Generated Personal Notes", detail.get_data(as_text=True))
        self.assertIn("Logistic Regression", detail.get_data(as_text=True))
        self.assertIn("MODULE READER", detail.get_data(as_text=True))
        self.assertIn("Download module", detail.get_data(as_text=True))
        module_download = self.client.get(f"/learning-materials/my-ai/{module_id}/download")
        self.assertEqual(module_download.status_code, 200)
        self.assertIn(b"Logistic Regression", module_download.data)
        module_download.close()
        with patch(
            "library.routes._configured_ai_completion",
            return_value="Grounded summary of the supplied notes.",
        ) as coach:
            ai_reply = self.client.post(
                "/api/libra",
                json={
                    "message": "Summarize my Logistic Regression notes",
                    "provider": "chatgpt",
                },
            ).get_json()
        self.assertIn("Grounded summary", ai_reply["reply"])
        coach_prompt = coach.call_args.args[1]
        self.assertIn("Exact grounded introduction", coach_prompt)
        self.assertNotIn(self.student_data["email"], coach_prompt)
        self.assertNotIn(self.student_data["full_name"], coach_prompt)
        self.assertEqual(ai_reply["links"][0]["url"], f"/learning-materials/my-ai/{module_id}")

        saved_resource = self.client.post(
            "/learning-materials/personal-resources",
            data={
                "title": "My Private Text Notes",
                "description": "Class notes",
                "attachment": (BytesIO(b"private student-authored note"), "private-notes.txt"),
            },
            content_type="multipart/form-data",
        )
        self.assertEqual(saved_resource.status_code, 302)
        with self.app.app_context():
            private_resource = PersonalResource.query.filter_by(title="My Private Text Notes").one()
            private_resource_id = private_resource.id
            self.assertIn("student-authored", private_resource.extracted_text)
        private_download = self.client.get(
            f"/learning-materials/personal-resources/{private_resource_id}/download"
        )
        self.assertEqual(private_download.data, b"private student-authored note")
        private_download.close()
        resource_detail_url = f"/learning-materials/personal-resources/{private_resource_id}"
        resource_detail = self.client.get(resource_detail_url)
        self.assertEqual(resource_detail.status_code, 200)
        self.assertIn("My Private Text Notes", resource_detail.get_data(as_text=True))
        self.assertIn("student-authored", resource_detail.get_data(as_text=True))
        resource_progress = self.client.post(
            f"{resource_detail_url}/progress",
            data={"reviewed": "yes"},
        )
        self.assertEqual(resource_progress.status_code, 302)
        with self.app.app_context():
            progress = MaterialProgress.query.filter_by(
                student_id=1, material_type="personal_resource", material_id=private_resource_id
            ).one()
            self.assertEqual(progress.percentage, 75)

        other_client = self.app.test_client()
        other_student_data = {
            **self.student_data,
            "full_name": "Other Student",
            "email": "other.student@mbu.asia",
            "student_id": "DS2026-015",
        }
        self.create_student(other_student_data)
        self.sign_in(other_client, other_student_data)
        self.assertEqual(other_client.get(resource_detail_url).status_code, 404)
        self.assertEqual(
            other_client.get(
                f"/learning-materials/personal-resources/{private_resource_id}/download"
            ).status_code,
            404,
        )

        self.assertEqual(
            self.client.post(
                f"/learning-materials/my-ai/{module_id}/quiz",
                data={"answer_0": "0", "answer_1": "0"},
                follow_redirects=True,
            ).status_code,
            200,
        )
        self.assertIn("Latest score: 2 of 2", self.client.get(created.headers["Location"]).get_data(as_text=True))
        saved_progress = self.client.post(
            f"/learning-materials/my-ai/{module_id}/progress",
            data={"topic": ["0"], "duration_minutes": "15"},
        )
        self.assertEqual(saved_progress.status_code, 302)
        self.client.post(f"/learning-materials/my-ai/{module_id}/bookmark")
        with self.app.app_context():
            module = db.session.get(PersonalModule, module_id)
            self.assertTrue(module.is_bookmarked)
            progress = MaterialProgress.query.filter_by(
                student_id=1, material_type="personal_module", material_id=module_id
            ).one()
            self.assertEqual(progress.percentage, 50)
            self.assertEqual(progress.time_spent_minutes, 15)
            self.assertEqual(
                PersonalModuleQuizAttempt.query.filter_by(personal_module_id=module_id).one().score,
                2,
            )
        analytics = self.client.get("/learning/analytics")
        self.assertEqual(analytics.status_code, 200)
        self.assertIn("AI personal modules", analytics.get_data(as_text=True))
        self.assertIn("100%", analytics.get_data(as_text=True))

        libra = self.client.post(
            "/api/libra",
            json={"message": "Summarize my Logistic Regression notes", "provider": "demo"},
        ).get_json()
        self.assertIn("Exact grounded introduction", libra["reply"])
        self.assertEqual(libra["links"][0]["url"], f"/learning-materials/my-ai/{module_id}")

        duplicate = self.client.post(f"/learning-materials/my-ai/{module_id}/duplicate")
        duplicate_id = int(urlparse(duplicate.headers["Location"]).path.split("/")[-2])
        self.assertEqual(self.client.get(duplicate.headers["Location"]).status_code, 200)
        edit = self.client.post(
            f"/learning-materials/my-ai/{duplicate_id}/edit",
            data={"title": "My Edited Notes", "content_json": json.dumps(payload)},
        )
        self.assertEqual(edit.status_code, 302)
        self.assertIn("My Edited Notes", self.client.get(edit.headers["Location"]).get_data(as_text=True))

        self.client.post("/logout")
        self.sign_in(data=other_student_data)
        self.assertEqual(self.client.get(f"/learning-materials/my-ai/{module_id}").status_code, 404)
        self.assertEqual(self.client.get(f"/learning-materials/my-ai/{module_id}/download").status_code, 404)
        self.assertEqual(
            self.client.post(f"/learning-materials/my-ai/{module_id}/delete").status_code,
            404,
        )

    def test_faculty_uploads_are_group_scoped_and_experiments_track_progress(self):
        self.create_student()
        self.sign_in()
        self.assertEqual(self.client.get("/faculty/learning-materials").status_code, 403)
        self.assertEqual(self.client.post("/faculty/lab-experiments").status_code, 403)
        student_materials_page = self.client.get("/learning-materials").get_data(as_text=True)
        self.assertIn("authorized lecturer accounts", student_materials_page)
        self.assertNotIn("＋ Create Faculty Module", student_materials_page)
        self.assertNotIn("＋ Add Lab Experiment", student_materials_page)
        self.app.config["FACULTY_EMAILS"] = self.student_data["email"]
        faculty_materials_page = self.client.get("/learning-materials").get_data(as_text=True)
        self.assertIn("＋ Create Faculty Module", faculty_materials_page)
        self.assertIn("＋ Add Lab Experiment", faculty_materials_page)

        created = self.client.post(
            "/faculty/learning-materials",
            data={
                "title": "Week One Regression Notes",
                "subject": "Data Science",
                "module_number": "1",
                "topics": "Regression and evaluation",
                "description": "Lecturer-issued notes.",
                "department": "CSE",
                "section": "3",
                "academic_year": "2026-27",
                "reference_url": "",
                "status": "published",
                "attachment": (BytesIO(b"Actual lecturer notes about logistic regression."), "week-one.txt"),
            },
            content_type="multipart/form-data",
        )
        self.assertEqual(created.status_code, 302)
        with self.app.app_context():
            faculty_module = FacultyMaterial.query.filter_by(title="Week One Regression Notes").one()
            faculty_module_id = faculty_module.id
            self.assertIn("Actual lecturer notes", faculty_module.extracted_text)
        module_page = self.client.get(f"/faculty-modules/{faculty_module_id}")
        self.assertEqual(module_page.status_code, 200)
        self.assertIn("Actual lecturer notes about logistic regression", module_page.get_data(as_text=True))
        self.assertIn("MODULE READER", module_page.get_data(as_text=True))
        self.assertIn("data-reader-next", module_page.get_data(as_text=True))
        downloaded = self.client.get(f"/faculty-modules/{faculty_module_id}/download")
        self.assertEqual(downloaded.status_code, 200)
        self.assertEqual(downloaded.data, b"Actual lecturer notes about logistic regression.")
        downloaded.close()
        notes_download = self.client.get(f"/faculty-modules/{faculty_module_id}/download-notes")
        self.assertEqual(notes_download.status_code, 200)
        self.assertIn(b"Actual lecturer notes about logistic regression", notes_download.data)
        notes_download.close()
        with self.app.app_context():
            db.session.add(FacultyMaterial(
                created_by=1,
                title="Scanned Lecturer Handout",
                subject="Data Science",
                description="Scanned reference copy.",
                department="CSE",
                section="3",
                attachment_name="scanned-handout.pdf",
                attachment_path="unavailable-scan.pdf",
                extracted_text="",
                status="published",
            ))
            db.session.commit()
        unreadable = self.client.post(
            "/api/libra",
            json={"message": "Explain the PDF uploaded by my lecturer", "provider": "demo"},
        ).get_json()
        self.assertIn("cannot summarize or explain", unreadable["reply"])
        self.assertEqual(unreadable["links"][0]["title"], "Scanned Lecturer Handout")

        self.client.post(
            f"/faculty-modules/{faculty_module_id}/progress",
            data={"document_reviewed": "on", "duration_minutes": "30"},
        )
        with self.app.app_context():
            progress = MaterialProgress.query.filter_by(
                student_id=1, material_type="faculty_module", material_id=faculty_module_id
            ).one()
            self.assertEqual(progress.percentage, 70)
            self.assertEqual(progress.time_spent_minutes, 30)
            self.assertEqual(progress.status, "in_progress")

        experiment_data = {
            "experiment_number": "4",
            "subject": "Data Science",
            "title": "Logistic Regression Lab",
            "department": "CSE",
            "section": "3",
            "aim": "Train and evaluate a logistic regression model.",
            "objectives": "Fit and inspect a binary classifier.",
            "tools": "Python, scikit-learn",
            "theory": "Logistic regression models class probabilities.",
            "procedure": "Prepare data, fit the model, evaluate predictions.",
            "source_code": "print('classify')",
            "sample_input": "Feature rows",
            "expected_output": "Predicted labels",
            "result": "Model evaluated.",
            "viva_questions": "Q: What is sigmoid? A: A probability link.",
            "status": "published",
        }
        experiment_created = self.client.post(
            "/faculty/lab-experiments",
            data=experiment_data,
            follow_redirects=True,
        )
        self.assertEqual(experiment_created.status_code, 200)
        self.assertIn("Experiment saved", experiment_created.get_data(as_text=True))
        with self.app.app_context():
            experiment = FacultyExperiment.query.filter_by(
                experiment_number="4", subject="Data Science"
            ).one()
            experiment_id = experiment.id
        update_data = {**experiment_data, "experiment_id": str(experiment_id), "title": "Updated Logistic Lab"}
        self.client.post("/faculty/lab-experiments", data=update_data)
        with self.app.app_context():
            self.assertEqual(
                FacultyExperiment.query.filter_by(experiment_number="4", subject="Data Science").count(),
                1,
            )
            experiment = db.session.get(FacultyExperiment, experiment_id)
            self.assertEqual(experiment.title, "Updated Logistic Lab")

        detail = self.client.get(f"/faculty-labs/{experiment_id}")
        self.assertEqual(detail.status_code, 200)
        self.assertIn("+ Add Content to Experiment", detail.get_data(as_text=True))
        official_experiment_content = self.client.post(
            f"/learning-content/faculty_experiment/{experiment_id}/add?concept=Logistic+Regression+Lab",
            data={
                "title": "Experiment-specific faculty reference",
                "topic": "Logistic Regression Lab",
                "content_type": "notes",
                "body": "Additional instructor notes for this exact experiment.",
                "visibility": "official",
                "aim": "Fit and inspect the model.",
            },
        )
        self.assertEqual(official_experiment_content.status_code, 302)
        self.assertIn(
            "Experiment-specific faculty reference",
            self.client.get(f"/faculty-labs/{experiment_id}").get_data(as_text=True),
        )
        with self.app.app_context():
            progress = MaterialProgress.query.filter_by(
                student_id=1, material_type="faculty_experiment", material_id=experiment_id
            ).one()
            self.assertEqual(progress.status, "not_started")
        self.client.post(
            f"/faculty-labs/{experiment_id}/progress",
            data={"started": "yes"},
        )
        self.client.post(
            f"/faculty-labs/{experiment_id}/progress",
            data={"marker": "code_reviewed", "duration_minutes": "15"},
        )
        self.client.post(
            f"/faculty-labs/{experiment_id}/progress",
            data={"marker": "viva_practiced", "viva_score": "85"},
        )
        self.client.post(
            f"/faculty-labs/{experiment_id}/progress",
            data={"complete": "yes"},
        )
        with self.app.app_context():
            progress = MaterialProgress.query.filter_by(
                student_id=1, material_type="faculty_experiment", material_id=experiment_id
            ).one()
            self.assertEqual(progress.status, "completed")
            self.assertEqual(progress.percentage, 100)
            self.assertEqual(progress.time_spent_minutes, 15)
            self.assertEqual(json.loads(progress.markers_json)["viva_score"], 85)
        analytics = self.client.get("/learning/analytics")
        self.assertIn("self-assessed viva average 85%", analytics.get_data(as_text=True))

        self.app.config["FACULTY_EMAILS"] = ""
        self.client.post("/logout")
        second = {
            **self.student_data,
            "full_name": "Section Four Student",
            "email": "section.four@mbu.asia",
            "student_id": "DS2026-016",
            "section": "4",
        }
        self.create_student(second)
        self.sign_in(data=second)
        self.assertEqual(self.client.get(f"/faculty-modules/{faculty_module_id}").status_code, 404)
        self.assertEqual(self.client.get(f"/faculty-modules/{faculty_module_id}/download").status_code, 404)
        self.assertEqual(self.client.get(f"/faculty-labs/{experiment_id}").status_code, 404)

    def test_concept_content_is_persistent_scoped_editable_and_private(self):
        self.create_student()
        self.sign_in()
        dashboard_modules = self.client.get("/dashboard?section=modules").get_data(as_text=True)
        dashboard_labs = self.client.get("/dashboard?section=labs").get_data(as_text=True)
        self.assertIn("+ Add", dashboard_modules)
        self.assertIn("+ Add", dashboard_labs)
        form_url = "/learning-content/module/machine-learning/add?concept=Linear+Regression"
        self.assertEqual(self.client.get(form_url).status_code, 200)
        first = self.client.post(
            form_url,
            data={
                "title": "Linear Regression Private Notes",
                "topic": "Linear Regression",
                "content_type": "notes",
                "body": "Residuals measure the difference between observed and predicted values.",
                "code": "print('fit')",
                "sample_input": "x = [1, 2]",
                "sample_output": "slope = 2",
                "references": "https://scikit-learn.org/",
                "tags": "regression, revision",
                "attachment": (BytesIO(b"personal regression note"), "regression.txt"),
            },
            content_type="multipart/form-data",
        )
        self.assertEqual(first.status_code, 302)
        self.assertEqual(
            self.client.post(
                form_url,
                data={
                    "title": "Linear Regression Practice",
                    "topic": "Linear Regression",
                    "content_type": "questions",
                    "body": "Compare the fitted line with a constant baseline.",
                    "practice_questions": "What does the residual plot show?",
                },
            ).status_code,
            302,
        )
        detail_url = "/modules/machine-learning"
        detail = self.client.get(detail_url)
        self.assertEqual(detail.status_code, 200)
        detail_text = detail.get_data(as_text=True)
        self.assertIn("+ Add Content to Machine Learning", detail_text)
        self.assertIn("View Added Content", detail_text)
        self.assertIn("+ Add", detail_text)
        self.assertEqual(
            self.client.post(
                form_url,
                data={
                    "title": "Unauthorized shared content",
                    "topic": "Linear Regression",
                    "content_type": "notes",
                    "body": "Students cannot publish official shared entries.",
                    "visibility": "official",
                },
            ).status_code,
            403,
        )
        self.assertIn("Linear Regression Private Notes", detail_text)
        self.assertIn("Linear Regression Practice", detail_text)
        self.assertIn("My Personal Notes", detail_text)
        with self.app.app_context():
            entries = LearningContentEntry.query.filter_by(
                parent_type="module", parent_id="machine-learning", owner_id=1
            ).order_by(LearningContentEntry.id).all()
            self.assertEqual(len(entries), 2)
            entry_id = entries[0].id
        self.assertEqual(self.client.get(f"/learning-content/entries/{entry_id}/edit").status_code, 200)
        downloaded = self.client.get(f"/learning-content/entries/{entry_id}/download")
        self.assertEqual(downloaded.data, b"personal regression note")
        downloaded.close()
        previewed = self.client.get(f"/learning-content/entries/{entry_id}/preview")
        self.assertEqual(previewed.data, b"personal regression note")
        previewed.close()
        edit = self.client.post(
            f"/learning-content/entries/{entry_id}/edit",
            data={
                "title": "Edited Linear Regression Notes",
                "topic": "Linear Regression",
                "content_type": "notes",
                "body": "Updated notes remain attached to the same module concept.",
                "references": "",
            },
        )
        self.assertEqual(edit.status_code, 302)
        self.assertIn("Edited Linear Regression Notes", self.client.get(detail_url).get_data(as_text=True))
        self.client.post("/logout")
        self.sign_in()
        self.assertIn("Edited Linear Regression Notes", self.client.get(detail_url).get_data(as_text=True))

        other = self.app.test_client()
        other_student = {
            **self.student_data,
            "full_name": "Another Learner",
            "email": "another.learner@mbu.asia",
            "student_id": "DS2026-052",
            "section": "4",
        }
        self.create_student(other_student)
        self.sign_in(other, other_student)
        other_detail = other.get(detail_url).get_data(as_text=True)
        self.assertNotIn("Edited Linear Regression Notes", other_detail)
        self.assertEqual(other.get(f"/learning-content/entries/{entry_id}/download").status_code, 404)
        self.assertEqual(
            other.post(f"/learning-content/entries/{entry_id}/delete").status_code,
            404,
        )
        self.assertEqual(
            self.client.post(f"/learning-content/entries/{entry_id}/delete").status_code,
            302,
        )
        self.assertNotIn("Edited Linear Regression Notes", self.client.get(detail_url).get_data(as_text=True))

    def test_faculty_content_is_official_and_student_notes_remain_private(self):
        self.create_student()
        self.sign_in()
        self.app.config["FACULTY_EMAILS"] = self.student_data["email"]
        faculty_add = self.client.post(
            "/learning-content/lab/python-data-analysis/add?concept=Python+Data+Analysis",
            data={
                "title": "Official lab worksheet",
                "topic": "Python Data Analysis",
                "content_type": "file",
                "body": "Complete these faculty-provided analysis steps.",
                "visibility": "official",
                "aim": "Inspect and summarize a dataset.",
                "requirements": "Python and pandas",
                "theory": "Tabular summaries reveal distributions.",
                "procedure": "Load, inspect, clean, summarize.",
                "result": "Document findings.",
                "viva_questions": "Why inspect missingness?",
            },
        )
        self.assertEqual(faculty_add.status_code, 302)
        student = self.app.test_client()
        student_data = {
            **self.student_data,
            "full_name": "Student Reader",
            "email": "student.reader@mbu.asia",
            "student_id": "DS2026-053",
            "section": "4",
        }
        self.create_student(student_data)
        self.sign_in(student, student_data)
        detail = student.get("/labs/python-data-analysis")
        self.assertEqual(detail.status_code, 200)
        self.assertIn("Official lab worksheet", detail.get_data(as_text=True))
        self.assertIn("Official Faculty Content", detail.get_data(as_text=True))
        self.assertIn("View Added Content", detail.get_data(as_text=True))
        student_note = student.post(
            "/learning-content/lab/python-data-analysis/add?concept=Python+Data+Analysis",
            data={
                "title": "My private lab notes",
                "topic": "Python Data Analysis",
                "content_type": "notes",
                "body": "My own observation while practicing.",
            },
        )
        self.assertEqual(student_note.status_code, 302)
        self.assertIn("My private lab notes", student.get("/labs/python-data-analysis").get_data(as_text=True))
        self.assertNotIn("My private lab notes", self.client.get("/labs/python-data-analysis").get_data(as_text=True))

    def test_authenticated_profile_is_loaded_per_student_account(self):
        self.create_student()
        self.sign_in()
        first_profile = self.client.get("/dashboard").get_data(as_text=True)
        self.assertIn("Asha Student", first_profile)
        self.assertIn("DS2026-014", first_profile)
        self.assertIn("S Bosu Babu", first_profile)

        self.client.post("/logout")
        second_student = {
            **self.student_data,
            "full_name": "Vungarala Rishikesh",
            "email": "24102A030183@mbu.asia",
            "student_id": "24102A030183",
            "section": "3",
        }
        self.create_student(second_student)
        self.sign_in(data=second_student)
        second_profile = self.client.get("/dashboard").get_data(as_text=True)
        self.assertIn("Welcome, Rishikesh!", second_profile)
        self.assertIn("Vungarala Rishikesh", second_profile)
        self.assertIn("24102A030183", second_profile)
        self.assertNotIn("Asha Student", second_profile)

    def test_existing_student_database_is_extended_without_losing_accounts(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            database_path = Path(temporary_directory) / "legacy.sqlite"
            with closing(sqlite3.connect(database_path)) as connection, connection:
                connection.execute(
                    """
                    CREATE TABLE student (
                        id INTEGER PRIMARY KEY,
                        full_name VARCHAR(120) NOT NULL,
                        email VARCHAR(254) NOT NULL UNIQUE,
                        student_id VARCHAR(40) NOT NULL UNIQUE,
                        department VARCHAR(80) NOT NULL,
                        year VARCHAR(20) NOT NULL,
                        faculty_name VARCHAR(120) NOT NULL DEFAULT 'Bosu Babu',
                        password_hash VARCHAR(255) NOT NULL,
                        reset_token_version VARCHAR(32) NOT NULL,
                        created_at DATETIME NOT NULL
                    )
                    """
                )
                connection.execute(
                    """
                    INSERT INTO student (
                        full_name, email, student_id, department, year, faculty_name,
                        password_hash, reset_token_version, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        "Legacy Student",
                        "legacy@mbu.asia",
                        "DS-OLD-1",
                        "Data Science",
                        "2nd Year",
                        "Bosu Babu",
                        "existing-hash",
                        "legacy-token-version",
                        "2026-01-01 00:00:00",
                    ),
                )
            legacy_app = create_app(
                {
                    "TESTING": True,
                    "SECRET_KEY": "legacy-migration-test",
                    "SQLALCHEMY_DATABASE_URI": f"sqlite:///{database_path.as_posix()}",
                }
            )
            try:
                with legacy_app.app_context():
                    student = Student.query.filter_by(email="legacy@mbu.asia").one()
                    self.assertEqual(student.full_name, "Legacy Student")
                    self.assertEqual(student.department, "CSE")
                    self.assertEqual(student.branch, "Data Science")
                    self.assertEqual(student.section, "3")
                    self.assertEqual(student.faculty_name, "S Bosu Babu")
                    self.assertEqual(student.faculty_designation, "Assistant Professor")
            finally:
                with legacy_app.app_context():
                    db.session.remove()
                    db.engine.dispose()

    def test_password_reset_page_is_removed(self):
        self.create_student()
        response = self.client.post("/forgot-password", data={"email": self.student_data["email"]})
        self.assertEqual(response.status_code, 302)
        self.assertEqual(urlparse(response.headers["Location"]).path, "/dashboard")
        response = self.client.get("/reset-password/not-a-valid-token")
        self.assertEqual(response.status_code, 302)
        self.assertEqual(urlparse(response.headers["Location"]).path, "/dashboard")
        with self.app.app_context():
            student = Student.query.filter_by(email=self.student_data["email"]).one()
            self.assertTrue(student.check_password(self.student_data["password"]))

    def test_forgot_password_form_is_removed(self):
        self.app.config["MAIL_SERVER"] = None
        response = self.client.post(
            "/forgot-password", data={"email": self.student_data["email"]}
        )
        self.assertEqual(response.status_code, 302)
        self.assertEqual(urlparse(response.headers["Location"]).path, "/dashboard")


if __name__ == "__main__":
    unittest.main()
