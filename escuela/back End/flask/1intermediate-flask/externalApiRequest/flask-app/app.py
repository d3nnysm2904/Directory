from flask import Flask, render_template, redirect, request
import requests

API_BASE_URL = 'http://www.mapquestapi.com/geocoding/v1'


key = 'JRHI7OQ8AyDAu8jLYBnpisDEiXNlEmSX'

app = Flask(__name__)


def get_coords(address):
    res = requests.get(f"{API_BASE_URL}/address",
                       params={'key': key, 'location':  address})
    data = res.json()
    # print(data['results'][0]['locations'][0]['latLng']['lat'])
    lat = data["results"][0]['locations'][0]['latLng']['lat']
    lng = data["results"][0]['locations'][0]['latLng']['lng']
    coords = {'lat': lat, 'lng': lng}
    return coords


@app.route('/')
def show_address_form():
    return render_template("address_form.html")


@app.route('/geocode')
def get_location():
    address = request.args["address"]
    coords = get_coords(address)
    return render_template('address_form.html', coords=coords)
