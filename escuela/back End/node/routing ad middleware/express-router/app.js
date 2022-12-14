const express = require( "express" );
const ExpressError = require( "./expressError" );
const middleware = require( "./middleware" );
const userRoutes = require( "./userRoutes" );
const morgan = require( 'morgan' );
const app = express();

app.use( express.json() );

// app.use( middleware.logger );
app.use( morgan( 'dev' ) );
app.use( "/users", userRoutes );
app.get( "/favicon.ico", ( req, res ) => res.sendStatus( 204 ) );

app.get( "/secret", middleware.checkPassword, ( req, res, next ) =>
{
  return res.send( "This is a secret " );
} );


app.get( '/private', middleware.checkPassword, ( req, res ) =>
{
  return res.send( 'This is private ' );
} );


// http://localhost:3000/secret?password=1234
// 404 handler
app.use( function ( req, res, next )
{
  return next( new ExpressError( "Not Found", 404 ) );
} );

// generic error handler
app.use( function ( err, req, res, next )
{
  // the default status is 500 Internal Server Error
  let status = err.status || 500;

  // set the status and alert the user
  return res.status( status ).json( {
    error: {
      message: err.message,
      status: status,
    },
  } );
} );

module.exports = app;