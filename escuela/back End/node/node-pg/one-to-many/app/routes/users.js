/** Routes for users of pg-relationships-demo. */

const db = require( "../db" );
const express = require( "express" );
const expressError = require( '../expressError' );
const router = express.Router();


/** Get users: [user, user, user] */

router.get( "/", async function ( req, res, next )
{
  try
  {
    const results = await db.query(
      `SELECT id, name, type FROM users` );

    return res.json( results.rows );
  }

  catch ( err )
  {
    return next( err );
  }
} );

/** Get user: {name, type, messages: [{msg, msg}]} */

router.get( '/:id', async ( req, res, next ) =>
{
  const { id } = req.params;
  try
  {

    const userResults = await db.query( 'SELECT name ,type FROM users WHERE id =$1', [ id ] );

    const msg = await db.query( 'SELECT id, msg FROM messages WHERE user_id =$1', [ id ] );
    if ( userResults.rows.length === 0 )
    {
      throw new expressError( `User ${ id } does not exist`, 404 );
    }
    const user = userResults.rows[ 0 ];
    user.messages = msg.rows;

    res.send( user );

  } catch ( e )
  {
    return next( e );
  }


} );

module.exports = router;