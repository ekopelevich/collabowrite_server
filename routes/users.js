var express = require('express');
var knex = require('../db/knex');
var app = express();
var userRouter = express.Router();
var storyRouter = express.Router({ mergeParams: true });

// app.use('/users', userRouter)
// userRouter.use('/:user_id/stories', storyRouter);
// storyRouter.use('/:user_id/stories', storyRouter);

userRouter.get('/:user_id', function(req, res, next) {
  knex('users').select().where('id', req.params.user_id)
  .then(function(user){
    res.status(200).send(user[0]);
  })
});

userRouter.get('/', function(req, res, next) {
  knex('users').select().then(function(users){
    res.status(200).send({user: users});
  })
});

userRouter.post('/', function(req, res, next) {
  console.log(req.body);
  var user = {};

  knex('users').returning('id').insert(user).then(function(ids) {
    user.id = ids[0];
    res.status(201).send(user);
  });
});

userRouter.put('/:user_id', function(req, res, next) {
  var user = {};

  knex('users').update(user)
  .where('id', req.params.user_id)
  .then(function(){
    res.status(202).send(user);
  })
});

userRouter.delete('/', function(req, res, next) {
  knex('users').delete()
  .where('id', req.params.user_id).then(function(){
    res.sendStatus(204);
  })
});

storyRouter.get('/:user_id', function(req, res, next) {
  knex('users').select().where('id', req.params.user_id)
  .then(function(user){
    console.log('hello', req.params)
    res.send('Hello from monkey ' + req.params.id);
    // res.status(200).send(user[0]);
  })
});

storyRouter.get('/:story_id', function(req, res, next) {
  knex('users').select().then(function(users){
    res.status(200).send({user: users});
    res.send('Hello from user ' + req.params.id + '. This is story # ' + req.params.id );
  })
});

app.use('/users/', userRouter);
app.use('/users/:user_id/stories', storyRouter);

module.exports = userRouter;
