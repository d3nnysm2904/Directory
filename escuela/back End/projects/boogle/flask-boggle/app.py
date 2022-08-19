from boggle import Boggle
from flask import Flask,session, request,jsonify,render_template 
from boggle import Boggle

app = Flask(__name__)
app.config["SECRET_KEY"] = "123456789"

boggle_game = Boggle()

@app.route('/')
def home():
    table = boggle_game.make_board()
    session['board']=table 
    maxScore=session.get('maxScore',0)
    numPlays=session.get('numPlays',0)
    
    return render_template('index.html',table=table,maxScore=maxScore,numPlays=numPlays)
    