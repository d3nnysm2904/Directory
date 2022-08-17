# dictionarie
# mutable,ordered mapping of key->values
# keys can be any immutable ypet
# we cannot a list or other dictionaries

person = {
    'first': 'denny',
    'last': 'sanchez'}

stuff = {
    True: 34,
    100: 'awesome'}

# retrieving values updating

'first' in person  # true
'denny' in person  # false
#only looks for keys

person['first']  # denny
#cannot use dot notation like in JS

person['first'] = 'D3nny'  # it changes the value of first

person['newKey'] = 'newValue'  # creates key and value

# gets the value if there is none then return second value as default
person.get('first', '2val')

dict()  # creates an empty dictionarie

dict([[True, 0], [False, 1]])  # [True:0,False:1]

#Itirating over divctionaries

for char in person.keys():
    print(char)
# first
# last
for char in person.values():
    print(char)
# D3nny
# sanchez

for char in person.items():
    print(char)

# ('first', 'D3nny')
# ('last', 'sanchez')


chickens = {
    'name': 'Lady Gray',
    'breed': 'Silkie',
    'total_egg_count': 12,
    'egg_chart': {
        'M': True,
        'T': True,
        'W': True,
        'T': True,
        'F': True,
        'S': False,
        'Su': False
    },
    'coop_mates': ['butters', 'stevie', 'henry']
}

for key in chickens.keys():
    print(key)

for values in chickens.values():
    print(values)


for items in chickens.items():
    print(items)


# Unpack

for (k, v) in chickens.items():
    print(k, v)


#make list
items = list(chickens.items())

# Methods

# d.copy() return new copy of d()
# d.get(x,default)retrieve value of x(return optional value if misiing )
# d.items()
# d/keys()
# d.values()
# d.pop(t);eliminates t from dictionarie
#d.popitem()removes and return random key values
# d.fromkeys()see example below
# d.clear();empty dictionarie
{}.fromkeys('MTWTFSS', True)
# { 'M': True,
#   'T': True,
#   'W': True,
#   'T': True,
#   'F': True,
#   'S': True,
#   'Su': True }
