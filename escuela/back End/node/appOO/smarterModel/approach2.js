const db = require( '../db' );
const ExpressError = require( '../expressError' );
class Dog
{
    constructor ( id, name, age )
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    static async getAll ()
    {
        const results = await db.query( 'SELECT id ,name ,age FROM dogs' );
        const dogs = results.rows.map( r => new Dog( r.id, r.name, r.age ) );

        return dogs;
    }

    static async getDogById ( id )
    {
        const result = await db.query( 'SELECT id, name ,age FROM dogs WHERE id =$1', [ id ] );

        const d = result.rows[ 0 ];
        if ( !d )
        {
            throw new ExpressError( 'Dog not found', 404 );
        }

        return new Dog( d.id, d.name, d.age );
    }

    static async create ( newName, newAge )
    {
        const result = await db.query( 'INSERT INTO dogs (name, age) VALUES($1, $2) RETURNING id , name ,age ', [ newName, newAge ] );

        const { id, name, age } = result.rows[ 0 ];

        if ( !name || !age )
        {
            throw new ExpressError( 'Missing data', 400 );
        }
        return new Dog( id, name, age );
    }


    /** save dog to db */

    async save ()
    {
        await db.query(
            `UPDATE dogs SET name=$1, age=$2 WHERE id = $3`,
            [ this.name, this.age, this.id ] );
    }

    /** delete dog */

    async remove ()
    {
        await db.query(
            `DELETE FROM dogs WHERE id = $1`,
            [ this.id ] );
    }


    speak ()
    {
        console.log( `${ this.name } says woof` );
    }
}

module.exports = Dog;