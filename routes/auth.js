var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var knex = require('../db/knex');

// Use bearerStrategy as a middleware route
// The only thing the client has to know about the server is the route to go to??
// login button - herokuapp/auth/google
// redirects to google (this is a browser redirect)
// google asks them to allow
// allow button takes them to myserver/callback
// create a JWT and the redirect to client with token in either query string or header or with a cookie(one-time only)
// /token route on the client side puts the JWT into localStorage
// ENV var where you store static host

var user = {
  name: 'Elana',
  password: '123'
};

router.post('/login', function(req,res){
  if (req.name == 'Elana'
    && req.password == 123) {
      jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d'}, function(token){
        console.log(user);
        res.json({token: token})
      });
    } else {
      res.status(401);
        res.json({
          maessage: "unauthorized"
        })
    }
});

module.exports = router;
