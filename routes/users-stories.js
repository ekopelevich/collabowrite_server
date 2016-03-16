var express = express.Router();
var router = express.Router({ mergeParams: true });

var users = require('./users');
var stories = require('./stories');

router.get('/:user_id', function(req, res, next) {
  knex('users').select().where('id', req.params.user_id)
  .then(function(user){
    res.send('Hello from user ' + req.params.id);
    // res.status(200).send(user[0]);
  })
});

router.use('/:user_id')
router.get('/:story_id', function(req, res, next) {
  knex('users').select().then(function(users){
    res.status(200).send({user: users});
    res.send('Hello from user ' + req.params.id + '. This is story # ' + req.params.id );
  })
});

module.exports = router;
