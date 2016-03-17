var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var moment = require('moment');
var contributions = require('./contributions');

router.get('/:storyId', function(req, res, next) {
  knex('stories').select().where('id', req.params.storyId)
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
  // console.log('request:', req)
  var story = {
    ownerId: 1,
    title: req.body.title,
    startDate: moment().format(),
    summary: req.body.summary,
    editLock: 0,
    genreId: req.body.genre,
    checkoutTime: moment().format(),
    stateId: 1
  };

  knex('stories').returning('id').insert(story).then(function(ids) {
    story.id = ids[0];
    console.log('story', story)
    res.status(201).send(story);
  });
});

router.put('/:storyId', function(req, res, next) {
  console.log(req.body);
  var story = {
    ownerId: 1,
    title: req.body.title,
    startDate: moment().format(),
    summary: req.body.summary,
    editLock: 0,
    genreId: req.body.genre,
    checkoutTime: moment().format(),
    stateId: 1
  };

  knex('stories').update(story)
  .where('id', req.params.storyId)
  .then(function(){
    res.status(202).send(story);
  })
});

router.delete('/:storyId', function(req, res, next) {
  knex('stories').delete()
  .where('id', req.params.storyId).then(function(){
    res.sendStatus(204);
  })
});

router.get('/:storyId/contributions', function(req, res, next) {
  knex.select().from('contributions')
    .join('stories', 'contributions.storyId', 'stories.id')
    .where('stories.id', req.params.storyId)
    .then(function(data){
      res.json(data);
    })
});

router.get('/:storyId/contributions/:contributionId', function(req, res, next) {
  knex.select().from('stories')
  .join('stories', 'contributions.storyId', 'story.id')
  .where('stories.id', req.params.storyId)
  .andWhere('contributions.id', req.params.contributionId)
  .then(function(data){
    res.json(data);
  })
});

module.exports = router;
