var express = require('express');
var router = express.Router();
var knexfile = require('../knexfile');
var knex = require('knex')(knexfile.development);

router.get('/:story_id', function(req, res, next) {
  knex('stories').select().where('id', req.params.story_id)
  .then(function(id){
    res.status(200).send(stories[id]);
  })
});

router.get('/', function(req, res, next) {
  knex('stories').select().then(function(stories){
    res.status(200).send(stories);
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
  };

  knex('stories').returning('id').insert(user).then(function(ids) {
    user.id = ids[0];
    res.status(201).send(user);
  });
});

router.put('/:story_id', function(req, res, next) {
  var user = {
    id: req.params.user_id,
    first_name: req.body.firstName,
    last_name: req.body.lastName
  };

  knex('stories').update(user)
  .where('id', req.params.user_id)
  .then(function(){
    res.status(202).send(user);
  })
});

router.delete('/', function(req, res, next) {
  knex('stories').delete()
  .where('id', req.params.user_id).then(function(){
    res.sendStatus(204);
  })
});

module.exports = router;
