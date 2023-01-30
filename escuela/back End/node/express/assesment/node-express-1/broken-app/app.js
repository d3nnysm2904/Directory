const express = require( 'express' );
const ExpressError = require( './expressError' );
const axios = require( 'axios' );
const app = express();
app.use( express.json() );

app.get( '/', async function ( req, res, next )
{
  try
  {
    let results = req.body.developers;
    let url = await axios.get( `https://api.github.com/users/` );

    if ( !results )
    {
      throw new ExpressError( 'need a name', 404 );
    }

    results.map( async ( d ) =>
    {
      await axios.get( `https:;//api.github.com/users/${ d }` );
    } );
    let out = results.map( r => ( { name: r.data.name, bio: r.data.bio } ) );

    return res.json( out );
  } catch ( e )
  {
    next( e );
  }
} );




app.listen( 3000, function () 
{
  console.log( "App on port 3000" );
} )

