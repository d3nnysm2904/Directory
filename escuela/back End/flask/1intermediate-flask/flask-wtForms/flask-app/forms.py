from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, RadioField, SelectField, SubmitField
from wtforms.validators import InputRequired, Optional, Email
# from app import depts
states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]


class AddSnackForm(FlaskForm):

    '''Form for adding snacks '''

    name = StringField('SnackName')
    price = FloatField('Price in Usd', validators=[
                       Optional()])  # validation is optional
    checkbox = BooleanField('Is this healthy')
    radio = RadioField('Category', choices=[('ic', 'Ice cream'), (
        'chips', 'Potatto Chips'), ('candy', 'Candy')])  # ic,chips,candy are the value inputs that wil be send back
    select = SelectField('Category', choices=[('ic', 'Ice cream'),
                                              ('chips', 'Potatto Chips'), ('candy', 'Candy')])
    # ic, chips, candy are the value inputs that wil be send back
    select2 = SelectField('Priority Code ', choices=[(1, 'High'), (2, 'Low')],
                          coerce=int)  # select2 will return int 1 or 2 dependign on the select

    # check is string is email patern
    email = StringField("Email")


class EmployeeForm(FlaskForm):

    name = StringField("Employee Name",
                       validators=[InputRequired(message='Name Required')])
    state = SelectField("State", choices=[(st, st) for st in states])

    dept_code = SelectField("Departament Code")
