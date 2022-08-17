# how to read a file

# you can open an on-disk file with - open(file_path,mode)
# file_path: absolute or relative path
# mode:string of how to open file ("r" for reading or 'w' for wrtiting ,'a' for append  )
# it returns an file-type insatnce

file = open('morse.txt', 'r')

# for line in file:
#     print(line)
#     # if the for loop is done ,file.read() will not read anything
#     # butt if we eant we cand do

#     file.seek(0)  # this reset the bar to begining

all_text = file.read()
file.close()


# write in files

# file2 = open('write.txt', 'w')
file2 = open('write.txt', 'a')

file2.write('\ni am line 2')  # \n append in a new line

file2.close()


file3 = open('demo.txt', 'w')

file3.write('this creates a new file ')

file3.close()


