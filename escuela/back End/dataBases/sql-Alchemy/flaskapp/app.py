from crypt import methods
import re
from flask import Flask ,request ,render_template ,redirect,flash ,session
from models import db , connect_db,Pet 
from distutils.log import error
from flask_debugtoolbar import DebugToolbarExtension

app= Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql:///pet_shop_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
app.config['SQLALCHEMY_ECHO']=True 
app.config['SECRET_KEY']='password1234'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home_page():
    return render_template('base.html')


@app.route('/pet_list')
def list_pets():
    """Show list of all pets in db """
    pets= Pet.query.all()
    return  render_template('list.html',pets=pets)


# <> whatever is inside <> represents a variable 
@app.route('/<int:pet_id>')
def show_pet(pet_id):
    """Show details about single pet """
    pet =Pet.query.get_or_404(pet_id)
    return render_template('details.html',pet=pet)
    
    
# CREATING A MODEL DEMO 
# A FORM WHERE A USER CAN CREATE A NEW PET 

@app.route('/form_pet')
def form():
    return render_template('form.html')

@app.route('/new_pet', methods=["POST"] )
def create_pet():
    name= request.form["name"]   
    species=request.form["species"]   
    hunger= request.form["hunger"]   
    hunger=int(hunger) if hunger else None 
    
    new_pet=Pet(name=name,species=species,hunger=hunger)
    db.session.add(new_pet)
    db.session.commit()
    
    return redirect(f"/{new_pet.id}")
    
    
    
    # Species route
    
@app.route('/species/<species_id>') 
def show_species(species_id):
    pets=Pet.get_by_species(species_id)
    return render_template('species.html',pets=pets,species=species_id)
    