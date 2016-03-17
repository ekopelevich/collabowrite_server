var express = require('express');
var knex = require('../db/knex');
var router = express();
var stories = require('./stories');

router.get('/:userId', function(req, res, next) {
  knex('users').select().where('id', req.params.userId)
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

router.put('/:userId', function(req, res, next) {
  var user = {};

  knex('users').update(user)
  .where('id', req.params.userId)
  .then(function(){
    res.status(202).send(user);
  })
});

router.delete('/:userId', function(req, res, next) {
  knex('users').delete()
  .where('id', req.params.userId)
  .then(function(){
    res.sendStatus(204);
  })
});

router.get('/:userId/stories', function(req, res, next) {
  knex.select().from('stories')
    .join('users', 'stories.ownerId', 'users.id')
    .where('users.id', req.params.userId)
    .then(function(data){
      res.json(data);
    })
});

router.get('/:userId/stories/:storyId', function(req, res, next) {
  knex.select().from('stories')
  .join('users', 'stories.ownerId', 'users.id')
  .where('users.id', req.params.userId)
  .andWhere('stories.id', req.params.storyId)
  .then(function(data){
    res.json(data);
  })
});

module.exports = router;
