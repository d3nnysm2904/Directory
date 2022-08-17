"""Simple Flask app to demonstrate some testing."""

from flask import Flask, request, render_template, redirect, session
from flask_debugtoolbar import DebugToolbarExtension


# Make flask error be  real errors , not html pages with error info 


app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"
app.debug = True

toolbar = DebugToolbarExtension(app)

app.config['DEBUG_TB_INTERCEPT_REDIRECTS']=False  #this to redirect directly to ('/)

@app.route('/')
def index():
    """Show homepage."""

    # Keep a count of how many times page is visited
    session['count'] = session.get('count', 0) + 1

    return render_template("index.html")


@app.route('/fav-color', methods=['POST'])
def fav_color():
    """Show favorite color."""

    fav_color = request.form.get('color')

    return render_template("color.html", fav_color=fav_color)


@app.route('/redirect-me')
def redirect_me():
    """Redirect user to homepage."""

    return redirect("/")
