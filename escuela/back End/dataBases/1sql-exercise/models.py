from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

Profile_img = "https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0"


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    first_name = db.Column(db.Text,

                           nullable=False)

    last_name = db.Column(db.Text,

                          nullable=False)

    img_url = db.Column(db.Text, nullable=False, default=Profile_img)

    @property
    def full_name(self):
        """Return full name of user."""

        return f"{self.first_name} {self.last_name}"


def connect_db(app):
    """Connect the database to our Flask app."""

    db.app = app
    db.init_app(app)
