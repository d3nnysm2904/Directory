from flask import Flask, render_template, flash, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, User, Emp, EmpPj, Dt, Pj
from forms import AddSnackForm, EmployeeForm

# from forms import AddSnackForm
# from forms import UserForm

app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///flask_wtforms"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False

debug = DebugToolbarExtension(app)

connect_db(app)


@app.route("/")
def homepage():
    """Show homepage links."""

    return render_template("index.html")


@app.route("/phones")
def phone_list():
    """Get list of users & dept phones.

    This version will be a 'n+1 query' --- it will query once for all
    users, and then for each department.

    There's a way to tell SQLAlchemy to load all the data in a single query,
    but don't worry about this for now.
    """

    emps = Emp.query.all()
    return render_template("phones.html", emps=emps)


@app.route("/add", methods=["GET", "POST"])
def add_snack():
    """Snack add form; handle adding."""

    form = AddSnackForm()

    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data
        flash(f"Added {name} at {price}")
        return redirect("/add")

    else:
        return render_template(
            "snack_add_form.html", form=form)


@app.route('/employees/new', methods=['GET', 'POST'])
def new_emp():

    form = EmployeeForm()

    depts = db.session.query(Dt.dept_code, Dt.dept_name)
    choices = []
    for dept in depts.all():
        choices.append((dept[0], dept[1]))
        form.dept_code.choices = choices

    if form.validate_on_submit():
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        new_emp = Emp(name=name, state=state,
                      dept_code=dept_code)

        db.session.add(new_emp)
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template('add_emp_form.html', form=form)


@app.route('/employees/<int:id>/edit', methods=['GET', 'POST'])
def edit_employee(id):

    emp = Emp.query.get_or_404(id)
    form = EmployeeForm(obj=emp)
    depts = db.session.query(Dt.dept_code, Dt.dept_name)
    choices = []
    for dept in depts.all():
        choices.append((dept[0], dept[1]))
        form.dept_code.choices = choices
    if form.validate_on_submit():
        emp.name = form.name.data
        emp.state = form.state.data
        emp.dept_code = form.dept_code.data
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template('edit.html', form=form)


@app.route('/employees/<int:id>/delete', methods=['POST'])
def delete(id):
    emp = Emp.query.get_or_404(id)
    db.session.delete(emp)
    db.session.commit()
    return redirect('/phones')
