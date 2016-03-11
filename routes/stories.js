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
    res.status(200).send({data: stories});
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var story = {
    owner_id: 23, // lookup owner
    title: req.body.title,
    start_date: 0, // figure out timestamp
    summary: req.body.summary,
    edit_lock: 0, // write some logic
    genre_id: 6, // write some logic
    checkout_time: 1457655254170, // figure out timestamp
    state_id: 1 // write some logic
  };

  knex('stories').returning('id').insert(story).then(function(ids) {
    story.id = ids[0];
    res.status(201).send(story);
  });
});

router.put('/:story_id', function(req, res, next) {
  var story = {
    id: req.params.user_id,
    owner_id: 23, // lookup owner
    title: req.body.title,
    start_date: 0, // figure out timestamp
    summary: req.body.summary,
    edit_lock: 0, // write some logic
    genre_id: 6, // write some logic
    checkout_time: 1457655254170, // figure out timestamp
    state_id: 1 // write some logic
  };

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
