const express = require( "express" );
const db = require( '../db' );
const Cat = require( "../simpleModel/approach1" );;

const router = new express.Router();


router.get( '/', async ( req, res, next ) =>
{
    const cat = await Cat.getAll();
    return res.json( cat );
} );

router.get( '/:id', async ( req, res, next ) =>
{
    try
    {
        const catId = await Cat.getCatById( req.params.id );
        return res.json( catId );
    } catch ( e )
    {
        next( e );

    }

} );

router.post( '/', async ( req, res, next ) =>
{
    try
    {
        const { name, age } = req.body;
        const cat = await Cat.create( name, age );
        return res.json( cat );

    } catch ( e )
    {
        next( e );
    }
} );

router.put( '/:id', async ( req, res, next ) =>
{
    const { name, age } = req.body;
    const cat = await Cat.update( req.params.id, name, age );

    return res.json( cat );

} );

router.patch( '/:id', async ( req, res, next ) =>
{
    try
    {

        const cat = await Cat.makeOlder( req.params.id );
        return res.json( cat );
    } catch ( e )
    {
        return next( e );

    }
} );

router.delete( '/:id', async ( req, res, next ) =>
{
    const cat = await Cat.delete( req.params.id );

    return res.json( { "Deleted": cat } );
} );



module.exports = router;