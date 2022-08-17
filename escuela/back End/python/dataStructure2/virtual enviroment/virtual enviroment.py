# Virtual Enviroment

# Creating an Virtual enviroment in terminal
# cd my_projectt-directory
# python3 -m venv file_name (usually venv)

# using the virtual enviroment
# source venv/bin/activate   (venv is file name)

# you dint have acces to globally instaled pip3

# i installed (pip3 install faker)

# from faker import Faker

# from mondrian_art import generate
# plt = generate()
# plt.show()


# fake = Faker()
# for x in range(10):
#     print(fake.name())


# to leave virtual enviroment
# deactivate


# how we track what code our libraary is using
# to see a lsit of installed library
# pip3 freeze
# conventianally its helpful to save this info into a file (typically named requirements.txt)
# pip3 freeze > requirements.txt

# we dont want to add venv file to git hub so we added to git.ignore


# pip3 freeze > requirements.txt
# so we creae a gitiginore in terminal
# touch .gitignore
# open gitignore
# inside file
# /venv
