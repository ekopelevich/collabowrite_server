var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/:user_id', function(req, res, next) {
  knex('users').select().where('id', req.params.user_id)
  .then(function(user){
    res.status(200).send(user[0]);
  })
});

router.get('/', function(req, res, next) {
  knex('users').select().then(function(users){
    console.log(users);
    res.status(200).send({user: users});
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = {};

  knex('users').returning('id').insert(user).then(function(ids) {
    user.id = ids[0];
    res.status(201).send(user);
  });
});

router.put('/:user_id', function(req, res, next) {
  var user = {};

  knex('users').update(user)
  .where('id', req.params.user_id)
  .then(function(){
    res.status(202).send(user);
  })
});

router.delete('/', function(req, res, next) {
  knex('users').delete()
  .where('id', req.params.user_id).then(function(){
    res.sendStatus(204);
  })
});

module.exports = router;
