import collections
from crypt import methods


# OO review

# class
#     blueprint for new objects, defines attributes & methods

# methods
#     function defined on calss , can see/cahnge attribute or insatnce

# class method
#     function defined on a class, called on class, not indivudual instance


# Instances
# like in js you make an instannnce by calling the class

from collections import Counter

# make insatnce of Counter
counts = Counter('OOMPA LOOMPA')

counts  # Counter({'O': 4, 'M': 2, 'P': 2, 'A': 2, ' ': 1, 'L': 1})

type(counts)  # collection counter

isinstance(counts, Counter)  # true ;counts is an instance of Counter

# datetimme library
