
# list_comprehensions_map


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# adding even nums
# there is a easier way
# evens = []
# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)
#         print(evens)

# easier way
even = [num for num in nums if num % 2 == 0]


# basic syntax
# [what_to_append for thing in list]

doubles = [num * 2 for num in nums]
square = [num ** 2 for num in [2, 4, 6, 8]]

["#" + char.upper() for char in 'lmfao']  # ['#L', '#M', '#F', '#A', '#O']

[num for num in range(10, 20)]  # print from 10 to 20 excluding 20 each num


# def gen_board(size,inital_val=none)

# this makes a board 3 by 3  [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
[[0 for y in range(3)] for x in range(3)]

# function


def gen_board(size, initial_val=None):
    return[[initial_val for x in range(size)]for y in range(size)]


double_evens = [num * 2 for num in nums if num % 2 == 0]


chickens = [
    {'name': "Henry", 'breed': 'Rooster'},
    {'name': 'Gray', 'breed': 'Hen'},
    {'name': 'Junior', 'breed': 'Rooster'},
    {'name': "Stevie Chicks", 'breed': 'Hen'},
    {'name': 'Rocket', 'breed': 'Hen'},
    {'name': 'Butters', 'breed': 'Rooster'}]

hens = [bird['name']for bird in chickens if bird['breed'] is 'Hen']
# will give only breed:Hens


# to do a else is :
# [do_this if something else do this for thing in things ]
scores = [55, 89, 68, 89, 53, 78, 90, 66, 71]

# grades = ['pass' for score in scores if score >= 70]
grades = ['pass' if score >= 70 else 'fail' for score in scores]

# this one return the morse code for ltr inputed


def get_morse(ltr):
    morse_code = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'}

    return morse_code.get(ltr.upper(), ' ')

# this one return phrase of morese code


def get_phrase(phrase):
    return ' '.join([get_morse(char) for char in phrase])


# can make list from any kind of iterable

vowels = {'a', 'e', 'i', 'o', 'u'}
words = 'apple'
vowel_list = [ltr for ltr in words if ltr in vowels]
# iterates 'apples' and return only letters in vowels {'a','e'}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens_doubles = {num: num * 2 for num in numeros if num % 2 == 0}
#  {2: 4, 4: 8, 6: 12, 8: 16, 10: 20}

words = ['apple', 'alberto', 'ernesto', 'papapya']
a_words = {w for w in words if w.startswith('a')}

# dictionarie
{day: 0 for day in 'MTWRFSU'}
# {'M': 0, 'T': 0, 'W': 0, 'R': 0, 'F': 0, 'S': 0, 'U': 0}
