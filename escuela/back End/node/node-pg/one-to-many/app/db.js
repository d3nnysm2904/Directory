/** Database client for pg-relationships-demo. */

const { Client } = require( "pg" );

const client = new Client( {
    connectionString: "postgresql://test_iser:mypassword@localhost/pg_relationship"
} );

client.connect();

module.exports = client;
