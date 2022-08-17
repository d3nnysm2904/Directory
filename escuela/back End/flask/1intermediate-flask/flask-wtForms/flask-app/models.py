"""Demo file showing off a model for SQLAlchemy."""
from flask_sqlalchemy import SQLAlchemy

# This is the connection to the database; we're getting this through
# the Flask-SQLAlchemy helper library. On this, we can find the `session`
# object, where we do most of our interactions (like committing, etc.)

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    """User."""

    __tablename__ = "users"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text,
                     nullable=False)
    email = db.Column(db.Text, nullable=True)


class Emp(db.Model):

    __tablename__ = "employees"

    id = db.Column(db.Integer, primary_key=True,
                   autoincrement=True
                   )

    name = db.Column(db.Text,
                     nullable=False,
                     unique=True)  # must have a value (NOT NULL )

    state = db.Column(db.String(10),
                      nullable=False,
                      default='FL')

    # This is the magic line!
    # Sets up a dept attribute on each instance of Employee.
    # SQLA will populate it with data from the departments table automatically!
    dept_code = db.Column(db.Text,
                          db.ForeignKey('departments.dept_code'))  # we create a relationship primary\foreign between both tables dept_code (s) , from  __tablename__= departments  , not the Dt model , __the tablename__

    # we can only call dept in Emp, employees can be accesed from Dt
    dept = db.relationship('Dt', backref='employees')

    # direct navigation: emp -> employeeproject & back
    assignments = db.relationship(
        'EmpPj', backref='employee', passive_deletes=True)

# secondary refers to a __tablename__ in this case EmpPj __tablename__='employee_projects'

    # direct navigation: emp -> project & back
    projects = db.relationship(
        "Pj",  secondary="employee_projects", backref="employee")

    # )

    def __repr__(self):
        """Show info about pet."""

        s = self
        return f"< id={s.id} name={s.name} state= {s.state} >"


class Dt(db.Model):

    '''Department . A department has many employees '''

    __tablename__ = "departments"

    dept_code = db.Column(db.Text,
                          primary_key=True)  # we set a primary key

    dept_name = db.Column(db.Text,
                          nullable=False,
                          unique=True)
    phone = db.Column(db.Text)

    # employees = db.relationship('Employee')

    def __repr__(self):
        """Show info about pet."""

        s = self
        return f"< dept_code={s.dept_code} dept_name={s.dept_name} phone= {s.phone} >"


class Pj(db.Model):

    __tablename__ = 'projects'

    proj_code = db.Column(db.Text,
                          primary_key=True)

    proj_name = db.Column(db.Text,
                          nullable=True  # meaning is required
                          , unique=True)

    dept_proj = db.relationship('EmpPj', backref='projects')

    assignments = db.relationship('EmpPj', backref='project')


class EmpPj(db.Model):
    __tablename__ = 'employee_projects'

    # we can have a primary key that consist in two columns in db table example emp_id and proj_code, this two pk go together , and need a employee.id and projects.proj_code

    emp_id = db.Column(db.Integer,            # this constraint is enforced
                       db.ForeignKey('employees.id', ondelete='CASCADE'), primary_key=True, nullable=False)
    proj_code = db.Column(db.Text,
                          db.ForeignKey('projects.proj_code',
                                        primary_key=True))

    parent = db.relationship('Emp', backref=db.backref(
        'employees_projects', passive_deletes=True))

    role = db.Column(db.Text)
    # parent = db.relationship('Emp', cascade="all,delete", backref='employees')


# So this is way to tell what code to run if I do something like python app.py you can put your code inside that if statement and only that code will run if you run the code from cli. An example of this is for could be like

# if __name__ == "__main__":

#     app.run(debug=True)
