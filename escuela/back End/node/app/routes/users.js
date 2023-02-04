
const db = require( "../db" );
const express = require( "express" );
const router = express.Router();
const ExpressError = require( "../expressError" );


/** Get users: [user, user, user] */
// One to many 

router.get( "/", async function ( req, res, next )
{
    try
    {
        const results = await db.query(
            `SELECT id, name, type FROM users` );
        if ( result.rows.length === 0 )
        {
            throw new expressError( "User not Found", 404 );
        }
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
            throw new ExpressError( "User not Found", 404 );
        }
        // making a object of users to add the messages 
        const user = userResults.rows[ 0 ];

        // adding the messages to the user obj 
        user.messages = msg.rows;

        res.send( user );

    } catch ( e )
    {
        return next( e );
    }


} );

module.exports = router;