/** Database setup for BizTime. */

const { Client } = require( "pg" );

const client = new Client( {
    connectionString: "postgresql://test_iser:mypassword@localhost/biztime"
} );

client.connect();

module.exports = client;
