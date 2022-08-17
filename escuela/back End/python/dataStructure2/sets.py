# Sets
# unique collections of items
# cant have duplicates values
# makiings sets

from this import d


languages = {'javascript', 'python', 'ruby'}

voted_languages = ['ruby', 'python3', 'javascript', 'python3']

set_voted = set(voted_languages)

set('$%#*')  # {'$','%','#','*'}

# methods
'ruby' in languages  # True

languages.add('scala')  # add it

languages.pop()  # random item is removed and return

languages.remove('ruby')  # removes ruby
languages.add('java')

#OPERATIONS

# | & - ^ THIS ONLY WORKS BETWEEN SET ANY OTHER TIME NEED TO BE WITH METHOD
moods = {'happy', 'sad', 'grumpy'}

dwarfs = {'happy', 'grumpy', 'doc'}

moods | dwarfs  # union={'happy','sad','grumpy','doc'}

moods & dwarfs  # intersection={'happy','grumpy'} values in common

moods - dwarfs  # difference={'sad'} values diference
dwarfs-moods  # difference={'doc'}  order does matter

# symmetric diffference {'sad','doc'}:return all elements that are not repeated (just one)
moods ^ dwarfs




lemon = {
    'sour', 'yellow', 'fruit', 'bumpy'
}
banana = {
    'fruit', 'smooth', 'sweet', 'yellow'}

#makes new set ,twice values are not repeated 
#banana.union(lemon) same but 
lemon|banana#|can aslo add another set #{'bumpy', 'fruit', 'smooth', 'sour', 'sweet', 'yellow'}


lemon&banana #{'fruit', 'yellow'}
lemon.intersection(banana) # {'fruit', 'yellow'}

lemon-banana # {'bumpy', 'sour'}
banana-lemon# {'smooth', 'sweet'
lemon.difference(banana)# same as lemon-banana

lemon^banana # {'bumpy', 'smooth', 'sour', 'sweet'}
banana.symmetric_difference(lemon) #{'bumpy', 'smooth', 'sour', 'sweet'}