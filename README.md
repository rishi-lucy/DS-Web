<<<<<<< HEAD
# Student Digital Library

A responsive MBU Data Science student-library portal built with Flask, Flask-Login, Flask-WTF and
Flask-SQLAlchemy. Student accounts are stored in SQLite; passwords are hashed,
CSRF protection is enabled. The shared, faculty-approved Data Science curriculum,
labs, tools, and public resources can be browsed without an account. Account
creation and sign-in pages are disabled; student profiles, private notes,
uploads, progress, notifications, faculty tools, and assistant services remain
protected and unavailable to public visitors.

The dashboard displays academic details and registered courses from each student's database record.
The registration form captures the student's name, roll number, department,
section, and year; branch, subject, and faculty details use the configured
Data Science defaults. The student portal includes a profile photo. Its
responsive light interface uses simple surfaces, labeled navigation, and a
text-based landing page without 3D effects. The landing page opens the public
library; login and account-creation routes redirect to the dashboard, while an
existing signed-in student session can still access protected student details
and features.
The portal uses a circular university-seal mark with the **Student Digital
Library** wordmark, higher-contrast text, and a course spotlight alongside the
student profile on the home dashboard.
The published curriculum is stored in SQLite and includes structured lessons,
objectives, examples, practice prompts, diagrams, and per-student progress.
Students can log study sessions, complete labs and resources, view analytics,
follow a daily plan, and manage in-app completion notifications.

## Personal and faculty learning materials

The authenticated **My Learning Materials** section contains private personal
study modules, personal links/uploads, group-scoped faculty modules, and
lecturer-provided lab experiments. Personal modules are generated only through
a configured ChatGPT, Gemini, or OpenAI-compatible provider; the demo assistant
does not fabricate a generated module. Students can edit, rename, duplicate,
bookmark, regenerate, delete, study, and quiz themselves on their private
modules. Module and experiment progress, study time, quiz attempts, and
self-assessed viva results are stored per student.
Personal modules include a page-turning reader and a Markdown download.
Faculty modules include a page-turning reader, downloadable module notes, and
an optional separate download/preview of the lecturer's unchanged original
attachment.

Faculty access is enabled only for existing account emails listed in
`FACULTY_EMAILS` (comma-separated). Authorized faculty can create, edit,
publish, and archive department/section-scoped notes and experiments. Original
uploads are stored outside the public static directory and are served only
after an authenticated owner or student-group permission check. Allowed file
types are PDF, legacy/modern Office documents, text/Markdown/RTF/CSV, Python
and SQL source, PNG/JPEG/GIF/WebP images, and ZIP bundles containing permitted
types. Uploads are limited to 25 MB per file; the ZIP member count and expanded
size are bounded. A ZIP can be used to bundle multiple files for a record.
Files are stored under `instance/learning_materials` by default; set
`LEARNING_MATERIAL_UPLOAD_FOLDER` to use a persistent private storage volume
in deployment.

LIBRA extracts text from PDFs, DOCX/PPTX, text, CSV, and source files. It does
not OCR images or legacy DOC/PPT files. If document text cannot be extracted,
it refuses to invent a document summary. For configured external AI requests,
LIBRA sends the question, anonymized course progress, and only matching
accessible source excerpts; it does not send the student's name, email, or ID.
Source text is treated as untrusted data, and document answers are instructed
to cite only included titles and page/section labels. Personal files remain
private to their owner, and faculty documents are limited to the student's
published department/section.

Every curriculum module and lab concept has an **+ Add** action. Students can
attach private notes, code, questions, references, images, and permitted files
to the exact module, topic, or experiment; authorized faculty can additionally
publish official shared entries. Entries are independently stored in SQLite,
shown on their parent detail page, and can be edited or deleted by their owner.
Uploaded attachments use the same private, authenticated storage and file
validation as faculty materials. Preview is available for supported images,
PDFs, text, and source files.

LIBRA AI uses a login-protected, source-aware demo responder by default.
Server-side `OPENAI_API_KEY` or `GEMINI_API_KEY` enables those providers;
`LIBRA_AI_MODEL` and `LIBRA_GEMINI_MODEL` choose their respective models.
An OpenAI-compatible endpoint can be configured with
`LIBRA_COPILOT_ENDPOINT` and `LIBRA_COPILOT_API_KEY`. AI-generated personal modules are saved only after a structured response has
passed validation. Faculty curriculum drafts are constrained to approved
curriculum and held for review before publication. The standard course
curriculum and its existing faculty workflow remain available independently
of personal AI generation.

Configure `FACULTY_EMAILS` as a comma-separated list of existing MBU account
emails to enable faculty review. In-app daily reminders are created at most
once per day when the student visits the dashboard after their configured UTC
time and outside quiet hours. The app does not send push/email reminders or run
a background scheduler.

## Run locally

```powershell
python -m pip install -r requirements.txt
python Ds.py
```

Open the local address printed by Flask. The SQLite database is created in the
Flask `instance` directory the first time the app starts.

## Password reset email

Forgot-password links are emailed only when an SMTP server and sender are
configured. Set `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USE_TLS`, `MAIL_USE_SSL`,
`MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_DEFAULT_SENDER` in the environment.
Without a configured mail server, the form displays an administrator-contact
message instead of pretending that a reset email was sent.

## Deployment

Set `APP_ENV=production`, a long random `SECRET_KEY`, and a production
`DATABASE_URL`. Production mode enables secure session and remember-me cookies;
serve the application over HTTPS behind a production WSGI server.
=======
# DS-Web
>>>>>>> origin/main
