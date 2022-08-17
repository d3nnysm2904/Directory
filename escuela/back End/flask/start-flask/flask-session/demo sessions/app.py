from contextlib import redirect_stderr
from flask import Flask, render_template, flash, session, request, redirect
from flask_debugtoolbar import DebugToolbarExtension
app = Flask(__name__)


app.config['SECRET_KEY'] = "oh-so-secret"
debug = DebugToolbarExtension(app)

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


@app.route('/')
def home():
    return render_template('base.html')


@app.route('/login-form')
def show_login_form():
    return render_template('login-form.html')


@app.route('/login')
def verify_secret_Code():
    SECRET = 'this_is_password'
    code = request.args["secret_code"]
    if code == SECRET:
        session['entered-pin'] = True
        return redirect('/secret-invite')
    else:
        return render_template('not-invited.html')


@app.route('/secret-invite')
def secret_invite():
    # use session.get so if there isnt one session['entered-pin'] we default to False
    if session.get('entered-pin', False):
        return render_template('invite.html')
    else:
        return redirect('/login-form')
