#  string methods 
# (s) string
# s.count(t); return umber of times t is in s
# s.endswith(st); does s end with t
# s.startswith
# s.find(t);index of first ocurrence of t in s(-1 is failure)
# s.isdigit();is s made of digits ?
# s.lower();return lower case copy of s
# s.upper()upper case
# s.capitalize()
# s.replace(t,count) reolace count (default:all) ocurrence of t in s 
# s.split(sep);return list of items made from splitting s on sep
# s.strip();removes whitespace at start/end of s (not betwenn )

'92'.zfill(5)#'00092'
'9245'.zfill(5)#09245

msg='hello there'

msg.count('h')#2

msg.endswith('e')#true

msg.find('l')#indeex 2

'4'.isdigit()#true


dogs=['King','Rocky','Yuma']

'-'.join(dogs)#'King-Rocky-Yuma'
'?'.join('lol')#l?o?lz

'msr denny'.capitalize()#Msr Denny

things='apples-tomato-orange'

things.replace('-','=')#'apples=tomato=orange'

things.replace('-','=',1)#'apples-tomato-orange'

animals='duck,pigs,bird'

animals.split(',')#['ducks','pigs','bird']

list('yolo')#['y','o','l','o']

""" 
hello
i
love 
you""".splitlines()#[' ', 'hello', 'i', 'love ', 'you']




# slice 

'lmfao'[:3]#lmf
'lmfao'[::-1] #'oafml'