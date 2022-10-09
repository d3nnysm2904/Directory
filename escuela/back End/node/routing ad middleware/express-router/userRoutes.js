const express = require( "express" );
const router = new express.Router();

const USER = [
  { id: 1, username: "d3nny" },
  { id: 2, username: "ado" },
];

/** GET /users: get list of users */

router.get( "/", function ( req, res )
{
  res.json( { users: USER } );
} );

router.get( "/:id", ( req, res ) =>
{
  const user = USER.find( ( u ) => u.id === +req.params.id );
  res.json( user );
} );

/** DELETE /users/[id]: delete user, return status */

// router.delete("/:id", function (req, res) {
//   const idx = users.findIndex((u) => u.id === +req.params.id);
//   users.splice(idx, 1);
//   return res.json({ message: "Deleted" });
// });

module.exports = router;
