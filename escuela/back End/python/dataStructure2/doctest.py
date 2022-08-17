def bounded_avg(nums):
    """ return aveg of nums(make sure nums are between 1-100
    
    >>> bounded_avg([10,20,30,40,50])
    4.0
    
    >>> bounded_avg([2,4,500])
    Traceback (most recent call last)
    ...
    ValueError:Outside bounds of 1-100
    """

    for n in nums:
      if n < 1 or n > 100:
        raise ValueError('Outside bound of 1-100')

    return sum(nums)/len(nums)


# to run this in the terminal

# python3 -m doctest -v your_file.py
