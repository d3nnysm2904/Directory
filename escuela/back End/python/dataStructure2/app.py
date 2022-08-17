#len

word = 'hello'

word.__len__()  # kind of .length in js

# function
len(word)

# list

letters = ['a', 'b', 'c', 'd']

list = ('hello')  # ['h','e','l','l','o']

vegan_no_nos = ['eggs', 'meat', 'milk', 'figs']
# if we want to check if a list is in a variable

pie_ingredients = ['flower', 'apples', 'suggars', 'eggs']

for food in pie_ingredients:
    if food in vegan_no_nos:
        print(f'i cannot eat the {food}')
    else:
        print(f"yummy {food} ")


vegan_no_nos[0]#eegs
vegan_no_nos[1]#meat
vegan_no_nos[-1]#milk

vegan_no_nos[3]='nofigs'#it changes it 