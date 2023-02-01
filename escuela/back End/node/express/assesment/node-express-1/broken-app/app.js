const express = require( 'express' );
const ExpressError = require( './expressError' );
const axios = require( 'axios' );
const app = express();
app.use( express.json() );


app.post( "/", async ( req, res, next ) =>
{
  try
  {
    const developers = req.body.developers;
    if ( !developers ) throw new ExpressError( "invalid post request ", 404 );
    let promises = [];
    developers.map( ( d ) =>
    {
      promises.push( axios.get( `https://api.github.com/users/${ d }` ) );
    } );




    Promise.all( promises ).then( ( result ) =>
    {
      let out = result.map( ( r ) => ( {
        name: r.data.name,
        bio: r.data.bio,
      } ) );

      return res.send( out );
    } );
  }

  catch ( err )
  {
    next( err );
  }
} );




app.listen( 3000, function () 
{
  console.log( "App on port 3000" );
} )

