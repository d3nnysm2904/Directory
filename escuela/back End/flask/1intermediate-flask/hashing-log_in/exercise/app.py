from flask import Flask, render_template, redirect, session, flash, url_for
from flask_debugtoolbar import DebugToolbarExtension
from models import Feedback, connect_db, db, User
from form import ProfileImg, UserForm, UserLogin, FeedbackForm
from sqlalchemy.exc import IntegrityError
from werkzeug.exceptions import Unauthorized
from werkzeug.utils import secure_filename
import os


UPLOAD_FOLDER = 'static/uploads/'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///flask_feedback"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)

toolbar = DebugToolbarExtension(app)


@app.route('/')
def home():

    return render_template('index.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = UserForm()

    if form.validate_on_submit():
        first_name = form.first_name.data
        last_name = form.last_name.data
        username = form.username.data
        password = form.password.data
        email = form.email.data

        new_user = User.register(
            username, password, email, first_name, last_name)

        db.session.add(new_user)
        try:
            db.session.commit()
            session['username'] = new_user.username
        except IntegrityError:
            form.username.errors.append(
                'Username taken. Please select another')
            form.email.errors.append(
                "Email already in use. Please LogIn with that email ")
            return render_template('register.html', form=form)

        flash('Succefully registered', "success")
        return redirect(f"/users/{session['username']}")
    return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if "username" in session:
        return redirect(f"/users/{session['username']}")

    form = UserLogin()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
        if user:
            flash(f'Welcome  {user.username}', 'info')
            session['username'] = user.username
            return redirect(f"/users/{session['username']}")
        else:
            form.username.errors = ['Invalid, please try again']
            return render_template('login.html', form=form)
    return render_template('login.html', form=form)


@app.route('/logout')
def logout_user():
    session.pop('username')
    flash("Goodbye!", "info")
    return redirect('/')


@app.route("/users/<username>")
def user(username):
    """Example hidden page for logged-in users only."""

    if "username" not in session:
        flash("You must be logged in to view!")
        return redirect("/")

    else:
        form = ProfileImg()
        user = User.query.get_or_404(username)

        return render_template("user.html", user=user, form=form)


@app.route("/users/<username>/img", methods=['GET', 'POST'])
def user_img(username):

    user = User.query.get_or_404(username)
    if "username" not in session or username != session['username']:
        flash("You must be logged in to view!")
        return redirect("/")

    else:
        form = ProfileImg()

        filename = secure_filename(form.file.data.filename)
        filename.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # filename.append(uuid.uuid4)
        # form.file.data.save('uploads/' + filename)

        # img = '/uploads/'+ filename
        # raise
        # print(filename)

        user.img_url = url_for('static', filename='uploads/' + filename)
        db.session.commit()

        # return redirect(f"/users/{{sesssion['username']}}")
    # return redirect(f"/users/{user.username}")
    return render_template("user.html", form=form, user=user)


@app.route("/users/<username>/delete", methods=['POST'])
def delete_user(username):

    if "username" not in session:
        flash("You must be logged in to view!")
        return redirect("/")

    else:

        user = User.query.get_or_404(username)
        db.session.delete(user)
        db.session.commit()
        session.pop('username')
        return redirect('/login')


@app.route('/users/<username>/feedback/new', methods=['GET', 'POST'])
def feedback(username):
    if "username" not in session or username != session['username']:
        flash("You must be logged in to view!")
        return redirect("/")

    form = FeedbackForm()

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data

        feedback = Feedback(title=title,
                            content=content,
                            username=username,
                            )

        db.session.add(feedback)
        db.session.commit()

        return redirect(f"/users/{feedback.username}")
    else:
        return render_template("feedback.html", form=form)


@app.route('/feedback/<int:feedback_id>/edit', methods=['GET', 'POST'])
def edit(feedback_id):
    feedback = Feedback.query.get_or_404(feedback_id)

    if 'username' not in session or feedback.username != session['username']:
        flash("You must be logged in to view!")
        return redirect("/")

    form = FeedbackForm(obj=feedback)

    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data

        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    return render_template("edit.html", form=form, feedback=feedback)


@app.route("/feedback/<int:feedback_id>/delete", methods=["POST"])
def delete(feedback_id):

    feedback = Feedback.query.get(feedback_id)
    db.session.delete(feedback)
    db.session.commit()
    return redirect(f"/users/{feedback.username}")
