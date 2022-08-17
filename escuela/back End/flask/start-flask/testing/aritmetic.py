# assert
def adder(x, y):
    # print('i am print')
    return x + y


# assert adder(1, 1) == 2, '1+1 is 2'
# assert adder(2, 7) == 10
# assert adder(2, 4) == 6

# asser will stop once it reach second tester assert , the error causes the code to stop

# -------------------
# DocTest


def mult(x, y):
    """ Multiply numbers
    >>> mult (3,4)
    12
    >>> mult(2,2)
    4
    """
    return x*y

# help(mult)// inside terminal
# to run the test
# python -m doctest -v app.py(name of file)

    # more advanced


def reverse_str(s):
    """Returns reverse of input str (s)"""
    return s[::-1]


def is_palindrome(s):
    """Boolean method to check whether given string is a palindrome"""
    rev = reverse_str(s)
    return s.lower() == rev.lower()


def factorial(n):
    """Calculates factorial iteratively."""
    if not (isinstance(n, int) and n >= 0):
        raise ValueError("'n' must be a non-negative integer.")
    result = 1
    for i in range(2, n+1):
        result *= i
    return result
