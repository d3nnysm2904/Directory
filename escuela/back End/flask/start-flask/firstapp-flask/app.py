
from crypt import methods
from flask import Flask, request
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"


@app.route('/')  # this is home page(the root)
def home_page():
    html = """
<html>
    <body>
      <h1>This is main page h1 </h1>
      <p>Welcome to my simple app </p>
      <a href='/somewhere'> Go somewhere page  <hr>
      <a href='/search?term=cat&sort=top'> Go to search page <br>
      <a href='/add_comment'> Go to comment page <br>
      <a href='/my_route'> Go to post page <br>
      <a href='/r'> add adtional route once in (like /r/<subreddit>/comments/post_id)  <br>
    
    </body>
</html>    
    """
    return html


@app.route('/somewhere')  # define a function
def take_me_somewhere():
    return "im in somewhere page "


# Flask provides an object,REQUEST, to represent web requests

# from flask import request this is up top annoing formater

@app.route('/search')
def search():
    """Handle get request like search?term=fun 
     request.args will be filled with information parsed from the query string, (refer to front end how the web works for query string )  """
    # print(request.args)# look in terminal with flask running
    terms = request.args["term"]  # line 20
    sort = request.args["sort"]  # line 20
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


# this is like a simple database
POST = {
    1: "i like chicken",
    2: "i love food",
    3: "I love animals ",
    4: "My number is 4 "
}


# int:id makes wahtever id we put into a number, in pythons mind all URLS are string that why we need to convert
# .get method will provide a default id if not in dictionarie
@app.route('/posts/<int:id>')
def handle_post(id):
    post = POST.get(id, "post not found")
    return f"<p>{post}</p>"


@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    """always needs a matching parameter ("subreddit" in this case) 
    so wahtever i type after /r is gonna trigger my route but only i had to define a single route example 

    /r/hello is : Browsing The hello subreddit
    /r/soccer is :Browsing The soccer subreddit
     """
    return f'<h1> Browsing The {subreddit} subreddit</h1>'


@app.route("/r/<subreddit>/comments/<post_id>")
def show_comments(subreddit, post_id):
    return f"<h1> Viewing comments for post with id :{post_id} from the {subreddit} Subreddit </h1>"
