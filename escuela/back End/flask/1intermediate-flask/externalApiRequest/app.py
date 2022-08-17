from flask import Flask, render_template, requests

key_for_mapquestapi = 'JRHI7OQ8AyDAu8jLYBnpisDEiXNlEmSX'


res = requests.get('http://www.mapquestapi.com/geocoding/v1/address',
                   params={'key': key_for_mapquestapi, 'location': '15420 Livingston Ave ,Fl,Lutz ,33559'})


# res.text
# res.json
