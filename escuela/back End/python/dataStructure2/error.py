# catching errors
# common errors types
#  AttributeError ;couldnt find attribute
# KeyError ;cant find key
# IndexError cant find index
# NameError Operating system error
# OSError operating system error cant read write file
# ValueError incorrect value (tried to convert 'hello' into int )
from multiprocessing.sharedctypes import Value


def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f"{person['name']} has been alive for {days} days")
    except KeyError as exc:
        print('EXC =>', exc)
        print('Missing key:age')
    except TypeError:
        print("Expected person to be dictionarie")


# Error HAndling patter

def bounded_avg(nums):
    """ return aveg of nums(make sure nums are between 1-100"""

    for n in nums:
      if n < 1 or n > 100:
        raise ValueError('Outside bound of 1-100')

    return sum(nums)/len(nums)


def handle_data():
    """ process data from data base ,this is an example """

    # ages = get_ages(from_data_base)
    ages = [10, 40, 50, 35, 67]
    try:
        avg = bounded_avg(ages)
        print("Average was", avg)

    except ValueError as exc:
        # exc is exception object --you can examine it
        print('invalid age in list og age')
