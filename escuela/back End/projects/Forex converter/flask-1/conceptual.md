### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

* Python
  1. - is used for backend development 
  2.-The way functions are created is :
   def functgtion_name():
      return print('i am a function')
  3. variables are defined like: variable = 'I am a string'
  4. - while some methods have similar functionality, the names are different; 
      example: if; elif ;else
# same as if ,else if, else 

* JavaScript
  1. -can be used for backend development and frontend development 
  2. - The way functions are created is : 
      function functionName () {
        return console.log('i am a function')
      }
  3. - variables are defined with "let" and "const" :
     * let variable = ['i am a string']
  
  4. -while some methods have similar functionality, the names are different; 
      example:same as if ,else if, else 




- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

  dict= {"a": 1, "b": 2}

  1. -c in dict # False  ; Looks for the key 
  2.-dict.get("c","a")  # gets the first value "c", if there is none it defaults to "a"  




- What is a unit test?

Unit Test 
    :does the individual component work ; test individual single components ,test one small piece of the app at a time like a single function; 
    testing code in isolated small pieces; 
    doesn't test integration of components
    Promote modular code 
   write code with testing in mind 

- What is an integration test?

Integration Testing
 What kind of thing do we want to test in our flask aplication ?
 Does this URL path map to route function ?
 Does this route return HTML?
 Does this route return the correct status code? 
 after a POST request to this route ,are we redirected? 
 after this route does the session contains expected info? 

 In comparison to unit test, Integration testing is a type of testing to check if different pieces of the modules work together as a whole.
In other words, integration tests cover the whole application, and they require much more effort to test effectively. They usually require resources like database instances and hardware to be allocated for them.

- What is the role of web application framework, like Flask?

A Web Application Framework or a simply a Web Framework represents a collection of libraries and modules that enable web application developers to write applications without worrying about low-level details such as protocol, thread management, and so on.


* Set of functions, classes, etc. that help you define
* Which requests to respond to
* http://server/about-us
* http://server/post/1
* How to respond to requests
* Shows an “About Us” page
* Show the 1st blog post
* Like a library, but bigger and more opinionated
* Usage is similar to the Python Standard Library.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

    Well in the flask app we can hardcode the parameter  (like '/foods/pretzel')  in the route URL if we want to set a specific route for a HTML page where it may gives us a page containing info about a pretzel
    We use the query param for maybe a search bar or an  input that needs certain type of info about any type of foods (in this case pretzel ) that needs to be filled by the user in order to obtain any specific info about foods or how is the food made (refering to foods because of the example 'foods?type=pretzel') but it really can be anything like id, name or company, etc. ) 


- How do you collect data from a URL placeholder parameter using Flask?


@app.route('/user/<username>')
def show_user_profile(username):
    """Show user profile for user."""

    name = USERS[username]
    return f"<h1>Profile for {name}</h1>"
  
  


- How do you collect data from the query string using Flask?

  request.arg[''] 
  The method request has an built in function that allows flask to recognize the query parameters and creates and inmutable dictionary that allows to the user seaarch information trhu the query parameters in the search bar 
 
 example 

 /search?term=dogs&race=bulldog

  then request.args creates the inmutabledict[('terms','dogs'),('race','bulldog')]

  we can create a variable in the app.route(/search) like:
   terms=request.args['terms]
   and return terms or maybe a f string , it depends on the type of functionality we want to create. 

 

- How do you collect data from the body of the request using Flask?
 
 
  with the built in methods from _request_ 


- What is a cookie and what kinds of things are they commonly used for?


  Cookies are a way to store small bits of info on a user client in a web browser 
information stored in the browser  on the client side, login information , username, info about shopin cart, pages visited ,ads ,etc.
this information can be send along with a request

- What is the session object in Flask?

  session in flask are a nice way of creating satteful http request or adding state on top 
  There are different types of Browser Storage 

  Local Storage:
 stores data in your browser with no expiration date , and gets cleared  only trhoug JavaScript or clearing the browser cache 
 Domain specific 
 Storage limit is much larger than a cookie 
 info not needed in server side 
 5mb/10mb storage 


Session Storage (different tahn flask session):
 Stores data only for until the browser or tab is closed, as long as the borwsing session is open 
 Storage limit is much larger than a cookie 
 5mb storage


- What does Flask's `jsonify()` do?

 it turn data in JSON to readeable info 
