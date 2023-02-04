
const db = require( "../db" );
const express = require( "express" );
const router = express.Router();
const ExpressError = require( "../expressError" );


router.get( '/', async ( req, res, next ) =>
{
    try
    {
        const results = await db.query( 'SELECT code ,name ,description FROM companies ' );
        return res.json( { "companies": results.rows } );

    } catch ( e )
    {
        next( e );
    }

} );


router.get( "/:code", async ( req, res, next ) =>
{
    const { code } = req.params;
    try
    {
        const result = await db.query( 'SELECT code,name,description FROM companies WHERE code=$1', [ code ] );

        if ( result.rows.length === 0 )
        {
            throw new ExpressError( `Company code :${ code } not found`, 404 );
        }

        return res.json( { "company": result.rows[ 0 ] } );
    } catch ( e )
    {
        return next( e );

    }
} );


router.post( '/', async ( req, res, next ) =>
{
    const { code, name, description } = req.body;
    try
    {
        const results = await db.query( 'INSERT INTO companies (code, name, description)  VALUES ($1, $2, $3) RETURNING code, name, description', [ code, name, description ] );

        return res.json( { "company": results.rows[ 0 ] } );
    } catch ( e )
    {
        next( e );
    }

} );

router.put( '/:code', async ( req, res, next ) =>
{
    const { name, description } = req.body;
    const { code } = req.params;
    try
    {
        const result = await db.query( "UPDATE companies SET name=$1 description=$2 ,WHERE code=$3 RETURNING code,name,descriptiom", [ name, description, code ] );
        if ( result.rows.length === 0 )
        {
            throw new ExpressError( `Company wit code :${ code } does not exist  `, 404 );
        }
        return res.json( { "company": result.rows[ 0 ] } );
    } catch ( e )
    {
        next( e );

    }
} );

router.delete( '/:code', async ( req, res, next ) =>
{
    const { code } = req.params;
    try
    {
        result = await db.query( 'DELETE FROM companies WHERE code=$1 RETURNING code', [ code ] );

        if ( result.rows.length == 0 )
        {
            throw new ExpressError( `Company doesnt exist : ${ code }`, 404 );
        }
        return res.json( { "company deleted": `${ code }` } );
    } catch ( e )
    {
        next( e );
    }

} );

module.exports = router;