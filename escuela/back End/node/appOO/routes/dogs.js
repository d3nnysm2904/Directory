const express = require( "express" );
const db = require( '../db' );

const Dog = require( "../smarterModel/approach2" );

const router = new express.Router();



router.get( '/', async ( req, res, next ) =>
{

    const dogs = await Dog.getAll();
    dogs.forEach( d => d.speak() );
    return res.json( dogs );
} );



router.get( '/:id', async ( req, res, next ) =>
{
    try
    {

        const dogs = await Dog.getDogbyId( req.params.id );
        return res.json( dogs );
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
        let dog = await Dog.create( name, age );
        return res.json( dog );

    } catch ( e )
    {
        next( e );
    }
} );

router.delete( "/:id", async function ( req, res, next )
{
    let dog = await Dog.getById( req.params.id );
    await dog.remove();
    return res.json( "deleted" );
} );


router.post( "/:id/age", async function ( req, res, next )
{
    try
    {
        let dog = await Dog.getDogById( req.params.id );
        dog.age += 1;
        await dog.save();
        return res.json( dog.age );
    } catch ( e )
    {
        next( e );
    }

} );


router.patch( "/:id/rename", async function ( req, res, next )
{
    try
    {
        let dog = await Dog.getDogById( req.params.id );
        dog.name = req.body.name;
        await dog.save();
        return res.json( dog );
    } catch ( e )
    {
        return next( e );
    }
} );

module.exports = router;