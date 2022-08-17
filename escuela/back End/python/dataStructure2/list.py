# list methods

# slicing
# can retrieve list from list
# lst[start:stop:step]


alpha = ['a', 'b', 'c', 'd', 'e']

alpha[2:]  # retrieves array from index 2 to the end ;['c','d','e']
alpha[2:4]  # retrieves list from i 2 to 3 not incluidng 4;['c','d']
alpha[:3]  # ['a','b','c'
alpha[::2]  # steps in 2 form start to end ;['a','c','e']
# start at i 3 to 0(not including index of 0) step -1 ['d','c','b',]
alpha[3:0:-1]
alpha[::-2]  # starts from end to beggining steps of 2;['e','c','a']

# more examples

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

num[0:10:2]  # : [1, 3, 5, 7, 9]


# Splicing
# using alpha again
# alpha = ['a', 'b', 'c', 'd', 'e']

alpha[2:] = ['y', 'z']  # ['a', 'b', 'y', 'z']
alpha[1:3] = []  # splice satrting at index 1 to 3 not including index3 ;['a','z']

# more Example

colores = ['red', 'blue', 'green']
# ['red', 'yellow','dark blue', 'green']
colores[1:2] = ['yellow', 'dark blue']

# colores=['red', 'yellow','dark blue' 'green']
colores[3:] = []  # makes i of and ahed empty  #['red', 'yellow','dark blue']

# More methods
# l is an list(array)

# l.append(x) ;adds x to end of list (only takes one argument )
# l.copy()  ;return a copy of the list
# l.count(x)  ;return number of times x appears in l
# l.extend(l2) ; adds items of l2 to l
# l.index(x) ;returns index of x in l
# l.pop(i) ;return and removes i at l (default is last )
# l.reverse()  ;reverse list (change in place)
# l.sort(); sort list


names = ['ado', 'jenny', 'yaki', 'luisa']

names.append('denny')  # add denny to the ned of list

namesCopy = names.copy()  # makes copy of names ;not the same object reference

names.count('yaki')  # 1 count how many times yaki is in list

last_names = ['sanchez', 'obando']

names.extend(last_names)  # adds ['sanchez', 'obando'] to names list
# names.extend('hello')#this will do ['h','e','l','l','o']

names.index('denny')  # wiil give index of denny 4

names.insert(0, 'daniel')  # will insert 'daniel' at index 0

names.insert(4, ['mosquera', 'pototo'])  # will insert list in index 4

names.sort()  # sort list by letter in this case


num.sort()  # ordena numeros menor mayor
num.sorkt(reverse=True)  # ordena mayor menor
