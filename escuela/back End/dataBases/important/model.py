from sqlalchemy import event
from sqlalchemy.engine import Engine
nullable = False  # column is required
nullable = True  # column is  not required


@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    files = db.relationship("File", backref="project", passive_deletes=True)


class File(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String, nullable=False)

    project_id = db.Column(
        db.Integer,
        db.ForeignKey("project.id", ondelete="CASCADE"),
        nullable=False)

    results = db.relationship("Result", backref="file", passive_deletes=True)


class Result(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)

    file_id = db.Column(
        db.Integer,
        db.ForeignKey("file.id", ondelete="CASCADE"),
        nullable=False)


Give the child table a foreign or modify the existing one, adding ondelete = 'CASCADE':

parent_id = db.Column(db.Integer, db.ForeignKey(
    'parent.id', ondelete='CASCADE'))
And one of the following relationships:

a) This on the parent table:

    children=db.relationship(
        'Child', backref = 'parent', passive_deletes = True)
    b) Or this on the child table:

    parent=db.relationship('Parent', backref=backref(
      'children', passive_deletes = True))






           - ----------------------------------------------------------------------
           First off, despite what the accepted answer says, the parent/child relationship is not established by using relationship, it's established by using ForeignKey. You can put the relationship on either the parent or child tables and it will work fine. Although, apparently on the child tables, you have to use the backref function in addition to the keyword argument.

           Option 1 (preferred)
           Second, SqlAlchemy supports two different kinds of cascading. The first, and the one I recommend, is built into your database and usually takes the form of a constraint on the foreign key declaration. In PostgreSQL it looks like this:

           CONSTRAINT child_parent_id_fkey FOREIGN KEY(parent_id)
           REFERENCES parent_table(id) MATCH SIMPLE
           ON DELETE CASCADE
           This means that when you delete a record from parent_table, then all the corresponding rows in child_table will be deleted for you by the database. It's fast and reliable and probably your best bet. You set this up in SqlAlchemy through ForeignKey like this(part of the child table definition):

           parent_id=db.Column(db.Integer, db.ForeignKey(
       'parent.id', ondelete = 'CASCADE'))
            parent=db.relationship('Parent', backref=backref(
        'children', passive_deletes = True))
            The ondelete='CASCADE' is the part that creates the ON DELETE CASCADE on the table.

            Gotcha!
            There's an important caveat here. Notice how I have a relationship specified with passive_deletes=True? If you don't have that, the entire thing will not work. This is because by default when you delete a parent record SqlAlchemy does something really weird. It sets the foreign keys of all child rows to NULL. So if you delete a row from parent_table where id=5, then it will basically execute

            UPDATE child_table SET parent_id=NULL WHERE parent_id=5
            Why you would want this I have no idea. I'd be surprised if many database engines even allowed you to set a valid foreign key to NULL, creating an orphan. Seems like a bad idea, but maybe there's a use case. Anyway, if you let SqlAlchemy do this, you will prevent the database from being able to clean up the children using the ON DELETE CASCADE that you set up. This is because it relies on those foreign keys to know which child rows to delete. Once SqlAlchemy has set them all to NULL, the database can't delete them. Setting the passive_deletes=True prevents SqlAlchemy from NULLing out the foreign keys.

            You can read more about passive deletes in the SqlAlchemy docs.

            Option 2
            The other way you can do it is to let SqlAlchemy do it for you. This is set up using the cascade argument of the relationship. If you have the relationship defined on the parent table, it looks like this:

            children=relationship('Child', cascade='all,delete', backref='parent')
            If the relationship is on the child, you do it like this:

            parent=relationship('Parent', backref=backref(
        'children', cascade = 'all,delete'))
            Again, this is the child so you have to call a method called backref and putting the cascade data in there.

            With this in place, when you delete a parent row, SqlAlchemy will actually run delete statements for you to clean up the child rows. This will likely not be as efficient as letting this database handle if for you so I don't recommend it.

Here are the SqlAlchemy docs on the cascading features it supports.
