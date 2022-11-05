// making classes models 
const db = require( '../db' );
const expressError = require( '../expressError' );

class Cat
{
    static async getAll ()
    {
        let result = await db.query( 'SELECT * FROM db_name' );
        return result.rows;



    }

    static async getById ( id )
    {
        const results = await db.query( 'SELECT id,name,age FROM cats where id =$1'[ id ] );
        if ( result.rows === 0 )
        {
            throw new ExpressError( 'Id not found ', 404 );
        }
    }
}
module.exports = Cat;