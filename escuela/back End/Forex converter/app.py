from crypt import methods
from distutils.log import error
from flask import Flask, jsonify, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from forex_python.converter import CurrencyRates, CurrencyCodes


app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)
c = CurrencyRates()
co = CurrencyCodes()
use_decimal = True

app.config['SECRET_KEY'] = "oh-so-secret"


def rate(fr, to, amt):

    rates = c.convert(fr, to, amt)

    return print(list(rates))


@app.route('/')
def home_page():
    return render_template('home.html')


@app.route('/', methods=['GET', 'POST'])
def home():

    currency_from = request.form['currency']
    currency_to = request.form['currency2']
    amount = request.form['amount']
    answer2 = 'Not valid '

    if amount != '' and currency_to != '' and currency_from != '':
        # rates = rate(currency_from, currency_to, int(amount))
        rate = c.convert(currency_from, currency_to, int(amount))

        symbol = co.get_symbol(currency_to)
        answer = f"The result is {symbol} {rate} "
        return render_template('home.html', answer=answer, symbol=symbol, rate=rate)

    else:
        amount = None
        currency_from = None
        currency_to = None
        flash('Invalid input')
        return render_template('home.html', answer2=answer2)
#
