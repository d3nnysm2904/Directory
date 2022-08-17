# packing/unpacking

# Unpacking

point = [10, 20]

x, y = point
# x=10 ,y=20

a = 2
b = 3
b, a = (a, b)  # a=3, b=2

names = ['denny', 'yaki']

name1, name2 = names

letters = ['a', 'b', 'c', 'd']

ltr1, *rest = letters

tuples = (1, 2, 3)

x, y, z = tuples
# python will makee x,y,z tuple ass well

color = [['red', 'green']['purple', 'orange']]

((primary1, secondary1)), ((primary2, secondary2)) = color
# it takes each color and makes it tuple


# spread

nums = [1, 2, 3, 4, 5]

other_nums = [*nums]  # it spread nums into other_nums


[0, -2, *nums]
#  [0, -2, 1, 2, 3, 4, 5]

[*'hello']
#  ['h', 'e', 'l', 'l', 'o']

# set
{*'hello'}
# {'e', 'h', 'l', 'o'}

rainfall = {"Jan": 2.5, 'Feb': 1.5}

{'Dec': 0.5 ** rainfall}  # needs to be ** for dictionaries
# {'Dec': 0.5, 'Jan': 2.5, 'Feb': 1.5}


print(nums)
# [1, 2, 3, 4, 5]

print(*nums)
# 1 2 3 4 5
