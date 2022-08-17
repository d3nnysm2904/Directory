
from itertools import chain


count =100 # 0 it should be 0 to make the code works same in guess 

while(count < 100):
    if count ==50:
        break 
    print(count)
    count = count + 10 # or count +=10
print('All done ')    


# break #to break the loop 

# input is a way of getting user input form the command line terminal 
# guess =input('enter a number')

target =44
guess = 44  #None  (it should be None , but is anyonig to enter guess everytime in the terminal  )  

while guess != target:
    guess=input('Please enter a guess')
    if guess=='q' or guess=='quit':
      break

    guess=int(guess)

print('All done ')    
    

    # FOR LOOPS 

for snack in ['peanut','twix','Mars bar']:
        print("i ate a ",snack)


colors =['red','blue','gray']

for color in colors:
    print(color)

for char in '12345':
    print('Hello')    



#range is to itirate 5 time including number from 0 to 4 (5 times )
for num in range(5): #makes [0,1,2,3,4]
    print(num)

# docs for range
# class range(stop)
# class range(start,stop[,step])   (step-interval;)

for num in range(10):
    print(num)

list(range(10))  # in terminal creates array [0,1,2,3,4,5,6,7,8,9]

list(range(5, 10))  # starts at 5 [5,6,7,8,9]

list(range(1,10,2))#interval of 2 [1,3,5,7,9]