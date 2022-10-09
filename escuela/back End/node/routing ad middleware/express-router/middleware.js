// WHAT DOES IT LOOK LIKE
const ExpressError = require( "./expressError" );

function logger ( req, res, next )
{
  console.log( `Sending ${ req.method } to ${ req.path }` );
  return next();
}

function checkPassword ( req, res, next )
{
  try
  {
    if ( req.query.password !== "1234" )
    {
      throw new ExpressError( "Missing password", 402 );
    }
    else
    {
      return next();
    }

  } catch ( e )
  {
    return next( e );
  }
}

module.exports = { logger: logger, checkPassword: checkPassword };
