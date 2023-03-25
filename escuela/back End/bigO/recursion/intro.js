// Counting recursively

function count ( n = 1 )
{
    if ( n < 3 )
    {
        console.log( n );
        count( n + 1 );
    }
}



// if num.length is not 0 
// then we grab the first number and sum plus the second number 
// sum([3,4,5])
// 3+sum([4,5])
// 4 + sum([5])
// 5+ sum([])
function sum ( num )
{
    //base case
    if ( num.length === 0 ) return 0;
    //normal case
    return num[ 0 ] + sum( num.slice( 1 ) );
}

// improving sum

function improvedSum ( num, i = 0 )
{
    if ( i === nums.length ) return 0;

    return nums[ i ] + sum( nums, i + 1 );
}

// doubler iteritave 
// list doubler 

// The problem:For every number in array ,  print the value,doub;ed
data = [ 1, 2, 3 ]; //=>2,4,6

// not recursive
const doubler = ( nums ) =>
{
    for ( let n of nums )
    {
        console.log( n * 2 );
    }
};

// but all numbers could be list themselves 

data = [ 1, [ 2, 3 ], 4 ]; //=>2 4 6 8

function doubler2 ( nums )
{
    for ( let n of nums )
    {
        if ( Array.isArray( n ) )
        {
            for ( let o of n )
            {
                console.log( o * 2 );
            }


        }
        else { console.log( n * 2 ); }
    }

};

// recursive 
function doubler ( nums )
{
    for ( let n of nums )
    {
        if ( Array.isArray( n ) )
        {
            doubler( n );
        } else ( console.log( n * 2 ) );
    }
}