from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import InputRequired
from wtforms.widgets import PasswordInput
# from wtforms import widgets


class RegisterForm(FlaskForm):
    """Form for registering a user."""

    username = StringField('Username', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    checkbox = BooleanField('See Password', id='check')


class LoginForm(FlaskForm):
    """Form for registering a user."""

    username = StringField("Username", validators=[InputRequired()])
    password = PasswordField("Password", validators=[
                             InputRequired()])
    checkbox = BooleanField('See Password', id='check')


# class PasswordField(StringField):
#     """
#     Original source: https://github.com/wtforms/wtforms/blob/2.0.2/wtforms/fields/simple.py#L35-L42

#     A StringField, except renders an ``<input type="password">``.
#     Also, whatever value is accepted by this field is not rendered back
#     to the browser like normal fields.
#     """
#     widget = widgets.PasswordInput(hide_value=False)
