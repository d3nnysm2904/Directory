import aritmetic
from aritmetic import reverse_str, is_palindrome, factorial
from unittest import TestCase


def adder(x, y):
    return x + y
# define a class


class AdditionTestCase(TestCase):
    """Examples of unit test
    to run in terminal is :python -m unittest unit_test.py """

    def test_adder(self):
        assert aritmetic.adder(2, 3) == 5

    def test_adder_2(self):
        # instead of assert aritmetic.adder(2,2)==4
        self.assertEqual(aritmetic.adder(2, 2), 4)
        self.assertEqual(aritmetic.adder(2, 2), 9)

# more complicated
# i dont have to do arimetic.reverse_str  because i imported each function


class AlgorithmsTestCase(TestCase):
    def test_reverse(self):
        self.assertEqual(reverse_str('hello'), 'olleh')
        self.assertEqual(reverse_str('Apple'), 'elppA')

    def test_is_palindrome(self):
        self.assertTrue(is_palindrome('racecar'))
        self.assertTrue(is_palindrome('kayak'))
        # Should ignore casing
        self.assertTrue(is_palindrome('Racecar'))
        self.assertFalse(is_palindrome('taco'))

    def test_factorial(self):
        self.assertEqual(factorial(5), 120)
        self.assertEqual(factorial(3), 6)
        self.assertRaises(ValueError, factorial, -5)
        self.assertRaises(ValueError, factorial, 4.3)
