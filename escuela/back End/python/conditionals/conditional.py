# if
# elif
# else
# same as if ,else if, else 



age=16
is_birthday=True

if age >=21:
    print('you can drink')
    if is_birthday:
        print('Happy Birthday 21')
elif age >=18:
    print('cant drink ')
    if is_birthday:
        print('Happy Birthday ')
else:
    print('sorry you cant come in')    

# Ternary operators 

# in js is : let age =18
#let msg=(age>=18)?'go vote' : "go play"
# msg // go vote 

# python
msg='go vote' if(age>=18) else 'go play'

# and or not :  is like && || !
# priority (1)or   (2)and    (3)not

if age < 10 or age >= 65:
    print('The ticket is 10$')
elif age>10 or age < 65:
        print('ticket is 20') 


# trutines and falsines
# falsi  0  0.0  " "  None(null)   False
# falsi [](empty list)  {}(empty dictionary)
# set(empty set)
