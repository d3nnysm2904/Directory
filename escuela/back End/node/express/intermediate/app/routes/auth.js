const express = require( 'express' );

const router = new express.Router();
const ExpressError = require( "../expressError" );
const db = require( '../db' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require( '../config' );
const { ensureLoggedIn, ensureAdmin } = require( "../middleware/auth" );

router.get( '/', ( req, res, next ) =>
{
    res.send( 'APP IS WORKING ' );
} );


// register a user 
router.post( '/register', async ( req, res, next ) =>
{
    try
    {
        const { username, password } = req.body;
        // exclamation mean if not username or if not password do this 
        if ( !username || !password )
        {
            throw new ExpressError( "Username and password required ", 400 );
        }
        // if ( username )
        // {
        //     throw new ExpressError( 'username already taken' );
        // }
        // hash password
        const hash_password = await bcrypt.hash( password, BCRYPT_WORK_FACTOR );
        // save to db
        const results = await db.query(
            "INSERT INTO users (username,password) VALUES( $1, $2 ) RETURNING username ", [ username, hash_password ] );

        return res.json( results.rows[ 0 ] );



    } catch ( e )
    {
        if ( e.code === '23505' )
        {
            return next( new ExpressError( 'username taken please use another', 400 ) );
        }
        return next( e );
    }
} );



// log in route

router.post( '/login', async ( req, res, next ) =>
{
    try
    {
        const { username, password } = req.body;
        if ( !username || !password )
        {
            throw new ExpressError( 'Username and password required', 400 );
        }
        const results = await db.query(
            `SELECT username , password
            FROM users
            WHERE username = $1 `,
            [ username ] );

        const user = results.rows[ 0 ];
        if ( user )
        {
            if ( await bcrypt.compare( password, user.password ) )
            {
                const token = jwt.sign( { username, }, SECRET_KEY );
                return res.json( { "message": "Logged in!", token } );
            }
        }
        throw new ExpressError( 'Invalid username/password', 404 );

    } catch ( e )
    {
        return next( e );
    }



} );

router.get( '/topsecret', ensureLoggedIn, ( req, res, next ) =>
{
    try
    {
        return res.json( { msg: "Welcome to the top secret page " } );

    } catch ( e )
    {
        return next( new ExpressError( "Please Log in first" ) );

    }

} );


router.get( '/private', ensureLoggedIn, ( req, res, next ) =>
{
    try
    {
        return res.json( { msg: `Welcome to the VIP section ${ req.user.username }` } );

    } catch ( e )
    {
        return next( e );

    }
} );

router.get( '/admin', ensureAdmin, ( req, res, next ) =>
{
    return res, json( { msg: "Welcome admin " } );
} );
module.exports = router;


//first example without middleware {
//     // once we logged in , the server will give me a token(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkQzbm55cyIsImlhdCI6MTY2ODI3NzYzMX0.eQH-f6TIKXpalKvKxRiENpPMGEEaBXDlWU6TjMkcMCk) , that token needs to be send trhu insomnia in a get request sending a body req 
//     // {_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkQzbm55cyIsImlhdCI6MTY2ODI3NzYzMX0.eQH-f6TIKXpalKvKxRiENpPMGEEaBXDlWU6TjMkcMCk" }
//     try
//     {
//         const token = req.body._token;
//         const data = jwt.verify( token, SECRET_KEY );
//         return res.json( 'Message signed in , top secret ' );


//     } catch ( e )
//     {
//         return next( new ExpressError( 'please login first ', 401 ) );
//     }
// } );



