import re

from flask_wtf import FlaskForm
from wtforms import BooleanField, PasswordField, SelectField, StringField, SubmitField
from wtforms.validators import (
    DataRequired,
    Email,
    EqualTo,
    Length,
    Regexp,
    ValidationError,
)


def validate_mbu_email(_form: FlaskForm, field: StringField) -> None:
    email = (field.data or "").strip().lower()
    if not email.endswith("@mbu.asia"):
        raise ValidationError(
            "Please use your official MBU college email address."
        )


class LoginForm(FlaskForm):
    email = StringField(
        "College Email",
        validators=[DataRequired(), Email(), validate_mbu_email, Length(max=254)],
    )
    password = PasswordField("Password", validators=[DataRequired()])
    remember = BooleanField("Remember me")
    submit = SubmitField("Sign In")


class RegistrationForm(FlaskForm):
    full_name = StringField(
        "Full Name", validators=[DataRequired(), Length(min=2, max=120)]
    )
    email = StringField(
        "College Email",
        validators=[DataRequired(), Email(), validate_mbu_email, Length(max=254)],
    )
    student_id = StringField(
        "Student ID / Roll Number",
        validators=[
            DataRequired(),
            Length(min=2, max=40),
            Regexp(
                re.compile(r"^[A-Za-z0-9/_-]+$"),
                message="Use letters, numbers, slashes or hyphens only.",
            ),
        ],
    )
    department = SelectField(
        "Department",
        choices=[("CSE", "CSE")],
        validators=[DataRequired()],
    )
    section = SelectField(
        "Section",
        choices=[(str(number), str(number)) for number in range(1, 11)],
        default="3",
        validators=[DataRequired()],
    )
    year = SelectField(
        "Year",
        choices=[
            ("1st Year", "1st Year"),
            ("2nd Year", "2nd Year"),
            ("3rd Year", "3rd Year"),
            ("4th Year", "4th Year"),
        ],
        validators=[DataRequired()],
    )
    password = PasswordField(
        "Password",
        validators=[
            DataRequired(),
            Length(min=8, message="Use at least 8 characters."),
        ],
    )
    confirm_password = PasswordField(
        "Confirm Password",
        validators=[DataRequired(), EqualTo("password", message="Passwords must match.")],
    )
    submit = SubmitField("Create account")


class ForgotPasswordForm(FlaskForm):
    email = StringField(
        "College Email",
        validators=[DataRequired(), Email(), validate_mbu_email, Length(max=254)],
    )
    submit = SubmitField("Send reset link")


class ResetPasswordForm(FlaskForm):
    password = PasswordField(
        "New password",
        validators=[DataRequired(), Length(min=8, message="Use at least 8 characters.")],
    )
    confirm_password = PasswordField(
        "Confirm new password",
        validators=[DataRequired(), EqualTo("password", message="Passwords must match.")],
    )
    submit = SubmitField("Update password")


class ProfileForm(FlaskForm):
    full_name = StringField(
        "Full Name", validators=[DataRequired(), Length(min=2, max=120)]
    )
    department = SelectField(
        "Department",
        choices=[("CSE", "CSE")],
        validators=[DataRequired()],
    )
    section = SelectField(
        "Section",
        choices=[(str(number), str(number)) for number in range(1, 11)],
        default="3",
        validators=[DataRequired()],
    )
    year = SelectField(
        "Year",
        choices=[
            ("1st Year", "1st Year"),
            ("2nd Year", "2nd Year"),
            ("3rd Year", "3rd Year"),
            ("4th Year", "4th Year"),
        ],
        validators=[DataRequired()],
    )
    submit = SubmitField("Save changes")
