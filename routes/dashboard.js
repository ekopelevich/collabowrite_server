var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.send('Dashboard!');
});

router.get('/secret', function(req, res, next){
  if (req.user.name == "Elana"
        && req.user.password == "123") {
    
  }
})

module.exports = router;
