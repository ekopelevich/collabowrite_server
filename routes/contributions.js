var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.use('/:user_id', function(req, res, next) {
  req.routeChain = req.routeChain || {};
  req.routeChain.contributionId = req.params.id;
  next();
});

router.get('/:contribution_id', function(req, res, next) {
  knex('contributions').select().where('id', req.params.contribution_id)
  .then(function(contribution){
    res.status(200).send(contribution[0]);
  })
});

router.get('/', function(req, res, next) {
  knex('contributions').select().then(function(contributions){
    console.log(contributions);
    res.status(200).send({contribution: contributions});
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var contribution = {
    author_id: 2,
    story_id: 1,
    title: req.body.title,
    body: req.body.body,
    start_time: moment().format(),
    status: 1
  };

  knex('contributions').returning('id').insert(contribution).then(function(ids) {
    contribution.id = ids[0];
    console.log('contribution', contribution)
    res.status(201).send(contribution);
  });
});

router.put('/:contribution_id', function(req, res, next) {
  console.log(req.body);
  var contribution = {
    author_id: 2,
    story_id: 1,
    title: req.body.title,
    body: req.body.body,
    start_time: moment().format(),
    status: 1
  };

  knex('contributions').update(contribution)
  .where('id', req.params.contribution_id)
  .then(function(){
    res.status(202).send(contribution);
  })
});

router.delete('/:contribution_id', function(req, res, next) {
  knex('contributions').delete()
  .where('id', req.params.contribution_id).then(function(){
    res.sendStatus(204);
  })
});

module.exports = router;
