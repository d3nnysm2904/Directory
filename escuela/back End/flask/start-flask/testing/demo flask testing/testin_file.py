from app import app  #this is importinmg thr app file to make test 
from unittest import TestCase
from flask import session 


# making test easier 
# add these before test case classes 

app.config['TESTING']=True #help get real python errors if there is one exception raised 


# this is a bit of hack , but dont use Flask DebugToolBar
app.config['DEBUG_TB_HOSTS']=['dont-show-debug-toolbar'] #stop flask debug  toolbar while we are running our test 



# to run this file in terminal needs to be python -m unittest testin_file.py


# client can be any name is just acting like a user , a client 
class ColorView(TestCase):
    
    
    
    def setUp(self):
         print('inside setUp')
         
         
         
    def tearDown():
        print('tearDown')
        
        
             
    def test_color_form(self):
        with app.test_client() as client:
            #making a request to '/'
            res = client.get('/')
            #  this gives us whatever data is beaing received ;in this case html data  (as_text=True) 
            html = res.get_data(as_text=True)

            # making sure our get request(res) is 200 code (ok)
            self.assertEqual(res.status_code, 200)
            # is this inside our html variable ,
            self.assertIn('<h1>Color Form</h1>', html)
            #POST request

    def test_color_form(self):
        with app.test_client() as client:
            # sending a post request to /fav-color and the data send should be blue, but also we can pass a query string
            res = client.post('/fav-color', data={'color': 'blue'})

            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)

            self.assertIn('<h3>Woah! I like blue, too</h3>', html)
            
            #test redirect 
    def test_redirect(self):
        with app.test_client()as client:
            res = client.get('redirect-me')     
            
            self.assertEqual(res.status_code,302) # is the status code 302? 
            self.assertEqual(res.location, '/')        
 
    def test_redirection_followed(self):
        with app.test_client()as client:
            res=client.get('/redirect-me',follow_redirects=True)
            html = res.get_data(as_text=True)
            

            self.assertEqual(res.status_code,200)
            self.assertIn("<h1>Color Form</h1>",html)

    
    def test_session_count(self):
        with app.test_client()as client:
            res=client.get('/')
            
            
            self.assertEqual(res.status_code,200)
            self.assertEqual(session['count'],1)
    
    # test sessions
    
    def test_session_count_4(self):
        """This send a get request 4 times and check wheter are 4 sessions stored ; 
        sometimes we need to do more than 4 next function helps wit it """
        with app.test_client()as client:
            res=client.get('/')
            client.get('/')
            client.get('/')
            client.get('/')
            
            self.assertEqual(res.status_code,200)
            self.assertEqual(session['count'],4)
    
    def test_session_before_request(self):
        """This allow us to test 999 request to sessions """
        with app.test_client ()as client :  
            #Any changes to session should go in here 
            #
            with client.session_transaction()as change_session:
                change_session['count']=999   
                
            #now those changes will be in Flask's sessions 
            res=client.get('/')
            
            self.assertEqual(res.status_code,200)
            
 
#  terDown setup 

class FlaskTest(TestCase):
    """
    Unittest will be looking for a particula @classmethod called setUpclass
    
    Run in order:
    setUp,test_1,tearDown 
    setUp , test_2, tearDown 
    
    """
    @classmethod
    def setUpclass(cls):
        """CLS is classmethod 
        this will run once before all these test cases , assuming we are in ColorView(TestCase) """
        print('Setup class')
    
    @classmethod    
    def tearDownclass(cls):
        """CLS is classmethod 
        This will run once after all test cases are done """
        print('tear down  class')    
    
    def setUp(self):
        """Stuff to do before every test 
        this will run before each individual test method 
         this are instance methods """
    
    
    
    def tearDown(self) :
        """Stuff to do after each test 
        this will run after each individual test method"""  
    
    
    
    def test_1():
        """......"""    
        
        
    def test_2():
        """....."""    
        
        

        
        
        