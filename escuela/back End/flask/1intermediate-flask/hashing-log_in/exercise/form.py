import email
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, EmailField, FileField
from wtforms.validators import InputRequired, Length
from flask_wtf.file import FileField, FileRequired
from werkzeug.utils import secure_filename


class UserForm(FlaskForm):

    first_name = StringField('First Name', validators=[InputRequired(), Length(max=30)], render_kw={
        "class": "form-control"})
    last_name = StringField('Last Name', validators=[InputRequired(), Length(max=30)], render_kw={
                            "class": "form-control"})

    email = EmailField("Enter Email", validators=[InputRequired(), Length(max=50)], render_kw={
        "class": "form-control"})
    username = StringField('Username', validators=[InputRequired(), Length(min=1, max=20)], render_kw={
        "class": "form-control"})
    password = PasswordField('Password', validators=[InputRequired(), Length(min=6, max=55)], render_kw={
        "class": "form-control"})

    checkbox = BooleanField('See Password', id='check', render_kw={
                            "class": " btn "})


class UserLogin(FlaskForm):

   username = StringField('Username', validators=[InputRequired(), Length(min=1, max=20)], render_kw={
       "class": "form-control"})
   password = PasswordField('Password', validators=[InputRequired(), Length(min=6, max=55)], render_kw={
       "class": "form-control"})
   checkbox = BooleanField('See Password', id='check', render_kw={
       "class": " btn "})


class FeedbackForm(FlaskForm):
    """Add feedback form."""

    title = StringField(
        "Title",
        validators=[InputRequired(), Length(max=100)],
    )
    content = StringField(
        "Content",
        validators=[InputRequired()],
    )


class ProfileImg(FlaskForm):
    file = FileField('Profile')


# @app.route("/users/<username>/img", methods=['POST'])
# def user_img(username):
#     """Example hidden page for logged-in users only."""
#     user = User.query.get_or_404(username)
#     if "username" not in session or username != session['username']:
#         flash("You must be logged in to view!")
#         return redirect("/")

#     else:

#         form = ProfileImg()

#         file = form.file.data
#         user = User(img_url=form.file.data)

#         db.session.commit()
#         # return redirect(f"/users/{user.username}")
#         return render_template("user.html", form=form, user=user)
#  <form >
#       <div>{{form.file}}</div>
#       <button
#       formmethod="post"
#       formaction="/users/{{session['username']}}/img"
#       >img</button>
#     </form>
