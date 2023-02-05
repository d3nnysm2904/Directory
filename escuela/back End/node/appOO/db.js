/** Database setup for BizTime. */

const { Client } = require( "pg" );

const client = new Client( {
    connectionString: "postgresql://test_iser:mypassword@localhost/pets_db"
} );

client.connect();

module.exports = client;
