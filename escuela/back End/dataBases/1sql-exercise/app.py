
from flask import Flask, render_template, request, redirect
from flask_debugtoolbar import DebugToolbarExtension

from models import db, User, connect_db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///user_db'
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)

connect_db(app)
db.create_all()


@app.route('/')
def user():

    # users = User.query.all()

    return redirect("/users")


@app.route('/users')
def users_index():
    """Show a page with info on all users"""

    users = User.query.all()
    return render_template('users.html', users=users)


@app.route('/new', methods=['GET'])
def form():

    return render_template('base.html')


@app.route("/new", methods=["POST"])
def users_new():

    new_user = User(
        first_name=request.form['name'],
        last_name=request.form['lastname'],
        img_url=request.form['img'] or None)

    db.session.add(new_user)
    db.session.commit()

    return redirect('/')


@app.route('/users/<int:user_id>')
def user_profile(user_id):
    user = User.query.get_or_404(user_id)

    return render_template('profile.html', user=user)


@app.route('/users/<int:user_id>/edit')
def edit(user_id):

    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)


@app.route('/users/<int:user_id>/edit', methods=["POST"])
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    user.first_name = request.form['name']
    user.last_name = request.form['lastname']
    user.img_url = request.form['img']

    db.session.add(user)
    db.session.commit()

    return redirect("/users")


@app.route('/users/<int:user_id>/delete', methods=['POST'])
def delete_profile(user_id):

    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()

    return redirect('/users')
