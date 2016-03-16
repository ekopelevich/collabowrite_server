var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var moment = require('moment');
var contributions = require('./contributions');

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
  var story = {
    owner_id: 1,
    title: req.body.title,
    start_date: moment().format(),
    summary: req.body.summary,
    edit_lock: 0,
    genre_id: req.body.genre,
    checkout_time: moment().format(),
    state_id: 1
  };

  knex('stories').returning('id').insert(story).then(function(ids) {
    story.id = ids[0];
    console.log('story', story)
    res.status(201).send(story);
  });
});

router.put('/:story_id', function(req, res, next) {
  console.log(req.body);
  var story = {
    owner_id: 1,
    title: req.body.title,
    start_date: Date.now(),
    summary: req.body.summary,
    edit_lock: 0,
    genre_id: req.body.genre,
    checkout_time: Date.now(),
    state_id: 1
  };

  knex('stories').update(story)
  .where('id', req.params.story_id)
  .then(function(){
    res.status(202).send(story);
  })
});

router.delete('/:story_id', function(req, res, next) {
  knex('stories').delete()
  .where('id', req.params.story_id).then(function(){
    res.sendStatus(204);
  })
});

// router.get('/:user_id/stories', function(req, res, next) {
//   knex.select().from('stories')
//     .join('users', 'stories.owner_id', 'users.id')
//     .where('users.id', req.params.user_id)
//     .then(function(data){
//       res.json(data);
//     })
// });
//
// router.get('/:user_id/stories/:story_id', function(req, res, next) {
//   knex.select().from('stories')
//   .join('users', 'stories.owner_id', 'users.id')
//   .where('users.id', req.params.user_id)
//   .andWhere('stories.id', req.params.story_id)
//   .then(function(data){
//     res.json(data);
//   })
// });

router.get('/:story_id/contributions', function(req, res, next) {
  knex.select().from('contributions')
    .join('stories', 'contributions.story_id', 'stories.id')
    .where('stories.id', req.params.story_id)
    .then(function(data){
      res.json(data);
    })
});

router.get('/:story_id/contributions/:contribution_id', function(req, res, next) {
  knex.select().from('stories')
  .join('stories', 'contributions.story_id', 'story.id')
  .where('stories.id', req.params.story_id)
  .andWhere('contributions.id', req.params.contribution_id)
  .then(function(data){
    res.json(data);
  })
});

module.exports = router;
