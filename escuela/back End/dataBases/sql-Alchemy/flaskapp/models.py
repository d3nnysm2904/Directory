from telnetlib import theNULL
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app 
    db.init_app(app)
    
    
# MODELS GO BELOW 

# we need to inherit from db.Model coming from SQLAlchemy that includes methods 

# next we create the table name 

# after that we move into definig the indiviual columns  
# id its the first , we call db.Column this is coming from SQLAlchemy ; then we specify a type in this case an integer (db.Integer)
# primary_key=True is just PRIMARY KEY from postgres UNIQUE NOT NULL 
#   autoincrement=True) is just SERIAL  from postgres
# next name=db.Column 
# db.String(50) is a string with a limit of 50 characters
# nullable=False is just NOT NULL  

# to create the table isnide ipython 
# %run app.py
# db.create_all()
# we can write it in this file but is something we do rarely  
# default =20 is just to set a default to 20 if no data added 

# CREATE TABLE pets (
#         id SERIAL NOT NULL,
#         name VARCHAR(50) NOT NULL,
#         species VARCHAR(30),
#         hunger INTEGER NOT NULL,
#         PRIMARY KEY (id),
#         UNIQUE (name)
# )
# up here is the same than class Pet 

# to add info inisde ipython  

# >>> fluffy =Pet(name="fluffy",species="Pet")
# >>> fluffy.hunger
# 20

# >>>db.session.add(fluffy)  #required to add to database 
# >>> db.session.commit()  #commit the transaction

#ADDING several names to Pet table 
# this is ipython

# names =['Rocky','Yuma','King']
# species=['Bully','Dog','Criollo']
# pets= [Pet(name=n,species=s)for n,s in zip(names,species)]

# zip creates a tuple and relates names with species: Rocky -Bully ; Yuma-Dog; King - Criollo 

# then to add all info to the table db 
# db.session.add_all(pets)

# CREATE TABLE pets (
#         id SERIAL NOT NULL,
#         name VARCHAR(50) NOT NULL,
#         species VARCHAR(30),
#         hunger INTEGER NOT NULL,
#         PRIMARY KEY (id),
#         UNIQUE (name)
# )
# up here is the same than class Pet
 
class Pet(db.Model):
    """Pet."""

    __tablename__ = "pets"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=20)

    def greet(self):
        """Greet using name."""

        return f"I'm {self.name} the {self.species or 'thing'}"

    def feed(self, units=10):
        """Update hunger based of units ."""

        self.hunger -= units
        # if self.hunger is substracted more than 20 wich equals negative number with max now s just going to be 0
        self.hunger = max(self.hunger, 0)

    def __repr__(self):
        """Show info about pet."""

        p = self
        return f"<Pet id={p.id} name={p.name} species= {p.species} hunger={p.hunger}>"

    
  
    @classmethod
    def get_by_species(cls, species):
        """Get all pets matching that species."""

        return cls.query.filter_by(species=species).all()

    
    @classmethod
    def get_all_hungry(cls):
        
        return cls.query.filter(Pet.hunger <=20).all()
    
    @classmethod
    def get_by_name(cls, name):
        """Get all pets matching that species."""
        check_name=cls.query.filter_by(name=name).all()
        
        if check_name is None :
            return True
     
        return False 
    
    
    
    
    
    
    
    
    
    
    # duplicate_user = db.session.query(Pet.id).filter(Pet.first_name='name1' | Pet.first_name='name2' ).first()