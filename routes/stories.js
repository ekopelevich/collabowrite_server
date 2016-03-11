var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/:story_id', function(req, res, next) {
  knex('stories').select().where('id', req.params.story_id)
  .then(function(story){
    res.status(200).send(story[0]);
  })
});

router.get('/', function(req, res, next) {
  knex('stories').select().then(function(stories){
    console.log(stories);
    res.status(200).send({story: stories});
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var story = {};

  knex('stories').returning('id').insert(story).then(function(ids) {
    story.id = ids[0];
    res.status(201).send(story);
  });
});

router.put('/:story_id', function(req, res, next) {
  var story = {};

  knex('stories').update(story)
  .where('id', req.params.story_id)
  .then(function(){
    res.status(202).send(story);
  })
});

router.delete('/', function(req, res, next) {
  knex('stories').delete()
  .where('id', req.params.story_id).then(function(){
    res.sendStatus(204);
  })
});

module.exports = router;
