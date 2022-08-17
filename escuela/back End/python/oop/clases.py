# classes


from random import randint
from pydoc import describe
from math import sqrt
eval()  # evaluates a string into python code

# __lt__;less than
# __le__;less or equal
# __eq__;equal
# __ne__ not equal
# __gt__greater than
# __ge__greater or euqal
# inside return true or false


class Triangle:
    """ Rigth triangle
    rand int gives a random number 
    init is like constructor in java script
    math.sqrt get tthe square root
      
    @classmethod alter the behavior of the function after it
    class is a reference to class Traingle   
    calss method is somethinf tha always will do a exact thing you wnat it to do 
    
    instance methods takes as many argumant as you want 
    str  and repr both return strings represetnations but
    # str is more for user use 
    # repr is for developers  """

    def __init__(self, a, b):
        """create triangle from a and b sides """
        self.a = a
        self.b = b

    def __repr__(self):
        """ it defines the values of triangle in a reedeble way"""
        return f"<Triangle a ={self.a} , b={self.b}"

    def __str__(self):
        """ same as __repr__ but user friendly"""
        return self.describe()

    def __eq__(self, other):
        """compares equaility between obj with Triangle class """
        return self.a == other.a and self.b == other.b

    @classmethod
    def random(cls):
      return cls(randint(1, 20), randint(1, 20))

    def get_hypothenuse(self):
        """get hypothenuse(length of third side)"""
        return sqrt(self.a ** 2 + self.b ** 2)

    def get_area(self):
        """GEt area of trianlge """
        return (self.a * self.b)/2

    def describe(self):
        return f"My area is {self.get_area()}"


# # Iheritance

# class Coloredtriangle(Triangle):
#     """ Triangle that has color"""

#     def __init__(self, a, b,color):
#         # get parent class [super()],class its __init__()
#         super().__init__(a, b)

#         self.color=color

#     def describe(self):
#         msg= super().describe() + f"i am {self.color}"
