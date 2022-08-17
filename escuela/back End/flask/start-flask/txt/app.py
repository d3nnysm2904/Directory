
from crypt import methods
from flask import Flask, request

app = Flask(__name__)


@app.route('/')  # this is home page(the root)
def home_page():
    html = """
<html>
    <body>
      <h1>This is main page h1 </h1>
      <p>Welcome to my simple app </p>
      <a href='/somewhere'> Go somewhere page 
      <hr>
      <a href='/search?term=cat&sort=top'> Go to search page <br>
      <a href='/add_comment'> Go to comment page <br>
      <a href='/my_route'> Go to post page 
    </body>
</html>    
    """
    return html


@app.route('/somewhere')  # define a function
def take_me_somewhere():
   return "im in somewhere page "


#Flask provides an object,REQUEST, to represent web requests

# from flask import request this is up top annoing formater

@app.route('/search')
def search():
    """Hanlde get request like search?term=fun 
     request.args will be filled with information parsed from the query string, (refer to front end how the web works for query string )  """
    # print(request.args)# look in terminal with flask running
    terms = request.args["term"]  # line 16
    sort = request.args["sort"]  # line 16
    return f"<h1> Search Results for:{terms}</h1> <p>Sorting by:{sort}</p>"


# post request

@app.route("/post", methods=["POST"])
def post_demo():
    return "You Made a Post request "


@app.route("/add_comment")
def add_comment_form():
    """ the name='comment' will be used to store the value from this input when is sent to the server  """
    return """
    <h1>Add comment</h1>
     <form method="POST">
      <input type='text' placeholder='username' name="username"/>
       <input type='text' placeholder='comment' name="comment"/>
       <button>Submit</button>
     </form> """


@app.route("/add_comment", methods=["POST"])
def save_comment():
    """
this is post request with form ,specify the attribute method="post 
this handles the add_comment_form """
    username = request.form["username"]
    comment = request.form["comment"]
    print(request.form)
    return f"""<h1> Saved your comment</h1>
    <ul>
        <li>Username:{username}</li>
        <li>Comment:{comment}</li>
    </ul """
