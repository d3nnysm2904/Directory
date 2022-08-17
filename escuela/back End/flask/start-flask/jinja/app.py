from crypt import methods
from distutils.log import error
from random import randint, choice, sample
from flask import Flask, jsonify, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route('/hello')
def html():
    return render_template('hello.html')


@app.route("/lucky")
def random_number():
    """Example of simple dynamic template"""
    num = randint(1, 10)

    return render_template('lucky.html', lucky_num=num)


@app.route('/form')
def show_form():
    return render_template('form.html')


 # from random import  choice and sample we are selecting the elements inside ;random is been use in /greet
#    sample is been use in /greet2
COMPLIMENTS = ['Cool', 'Amazing', 'Awesome', 'Great', 'Super', 'Beatiful']


@app.route('/greet')
def greeter():
    # chooses a random complement from COMPLIMENTS
    nice_compliment = choice(COMPLIMENTS)
    username = request.args["username"]
    return render_template('greeter.html', username=username, complements=nice_compliment)


# loops

@app.route('/spell/<word>')
def spell_word(word):
    caps_word = word.upper()
    return render_template('spell.html', word=caps_word)


# greeter2
@app.route('/form2')
def greet_demo():
    return render_template('form2.html')


@app.route('/greet2')
def get_greet2():
    username = request.args['username']

    wants_compliments = request.args.get('wants_compliments')

    nice_things = sample(COMPLIMENTS, 3)  # select 3 out of COMPLIMENTS

    return render_template('greet2.html', username=username, wants_compliments=wants_compliments, complements=nice_things)

# base html template home


@app.route('/')
def home_page():
    return render_template('home.html')


# redirect
# a page we use to have but is no longer working
@app.route('/redirect')
def redirect_to_home():
    """redirects to home new page """
    flash('That page has move! this is our new page ')
    return redirect('/')


# MOVIES = ['300', 'Batman', 'IronMan', 'DoctorStrange', 'SpiderMan',
#           'Morbius', 'Chicken Run', 'Pirates of the Caribean']
# convert into set
MOVIES = {'300', 'Batman', 'IronMan', 'DoctorStrange', 'SpiderMan',
          'Morbius', 'Chicken Run', 'Pirates of the Caribean'}


@app.route('/movies')
def show_movies():
    """Show list of movies in fake data base """
    return render_template('movies.html', movies=MOVIES)


@app.route('/movies/new', methods=["POST"])
def add_movie():
    """"Add to pretend DataBase
    inside flash the error and success are categories ,creating a class to do some css, is in base.html and the css file """
    title = request.form['title']
    # MOVIES.append(titles)# this is with list
    # error and succes in flash messaging are categories
    if title in MOVIES:
        flash('Movie already Exists ! ', 'error')
    else:
        MOVIES.add(title)  # set method
        flash('Created your movie', 'success')

    # import pdb     # debuging with python
    # pdb.set_trace()

    return redirect('/movies')


# flask_jason


# @app.route('/movies/json')
# def get_json_movies():
#     return '{"Boyhood:{"year":2015}}'


@app.route('/movies/json')
def get_json_movies():
    info = {"name": "whiskey", "cute": "Hella"}
    return jsonify(list(MOVIES))
# alternate syntax
# return jsonify(name: "whiskey",cute:"Hella")
