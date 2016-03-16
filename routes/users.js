var express = require('express');
var knex = require('../db/knex');
var router = express();
var stories = require('./stories');

router.get('/:user_id', function(req, res, next) {
  knex('users').select().where('id', req.params.user_id)
  .then(function(user){
    res.status(200).send(user[0]);
  })
});

router.get('/', function(req, res, next) {
  knex('users').select()
  .then(function(users){
    res.status(200).send({user: users});
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = {};

  knex('users').returning('id').insert(user)
  .then(function(ids) {
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

router.delete('/:user_id', function(req, res, next) {
  knex('users').delete()
  .where('id', req.params.user_id)
  .then(function(){
    res.sendStatus(204);
  })
});

router.get('/:user_id/stories', function(req, res, next) {
  knex.select().from('stories')
    .join('users', 'stories.owner_id', 'users.id')
    .where('users.id', req.params.user_id)
    .then(function(data){
      res.json(data);
    })
});

router.get('/:user_id/stories/:story_id', function(req, res, next) {
  knex.select().from('stories')
  .join('users', 'stories.owner_id', 'users.id')
  .where('users.id', req.params.user_id)
  .andWhere('stories.id', req.params.story_id)
  .then(function(data){
    res.json(data);
  })
});

module.exports = router;
