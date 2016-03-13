var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// router.use('/:user_id', function(req, res, next) {
//   req.routeChain = req.routeChain || {};
//   req.routeChain.contributionId = req.params.id;
//   next();
// });

// router.get('/:contribution_id', function(req, res, next) {
//   knex('contributions').select().where('id', req.params.contribution_id)
//   .then(function(contribution){
//     res.status(200).send(contribution[0]);
//   })
// });

router.get('/', function(req, res, next) {
  knex('contributions').select().then(function(contributions){
    console.log(contributions);
    res.status(200).send({contribution: contributions});
  })
});

// router.get('/', function(req, res, next) {
//   var where = {};
//   if (req.routeChain && req.routeChain.storyId) where.story_id = req.routeChain.storyId;
//   route.readAll(where).then(function(data) {
//     res.json(data);
//   }).catch(next);
// });
//
// router.post('/', function(req, res, next) {
//   if (req.user && req.routeChain && req.routeChain.storyId) {
//     var body = digest(req.body, req.routeChain.storyId);
//     body.body.story_id = req.routeChain.storyId;
//     knex('contributions').returning('*').insert(body.body).then(function(contributions) {
//       if (body.description) {
//         return knex('skill_description').insert({ id: contributions[0].id, description: body.description }).then(function() {
//           return Promise.resolve(contributions);
//         });
//       } else {
//         return Promise.resolve(contributions);
//       }
//     }).then(function(contributions) {
//       res.json({ success: true, contributions: contributions });
//     }).catch(next);
//   }
// });
//
// // route.get('/:id', function(req, res, next) {
// //   var where = {
// //     'tasks.id': req.params.id
// //   };
// //   if (req.routeChain && req.routeChain.storyId) {
// //     where.story_id = req.routeChain.storyId;
// //   }
// //   route.readOne(where).then(function(data) {
// //     res.json(data);
// //   });
// // });
//
// router.put('/:id', function(req, res, next) {
//   if (req.user.id) {
//     var body = digest(req.body, req.params.id);
//     Promise.all([
//       knex('contributions').returning('*').where('id', req.params.id).update(body.body),
//       knex('skill_description').where('id', req.params.id)
//     ]).then(function(data) {
//       var task = data[0][0];
//       var skillDescription = data[1][0];
//       return updateOrCreate(body.description, skillDescription, req.params.id)
//       .then(function() {
//         return Promise.resolve(data[0]);
//       });
//     }).then(function(tasks) {
//       res.json({ success: true, tasks: tasks });
//     }).catch(next);
//   } else {
//     next('You must be logged in');
//   }
// });
//
// router.delete('/:id', function(req, res, next) {
//   if (req.user.id) {
//     knex('tasks').where({ id: req.params.id }).del().then(function() {
//       res.json({ success: true });
//     }).catch(next);
//   }
// });

// function digest(body, id) {
//   var ret = {
//     description: body.description
//   };
//   if (body.hasOwnProperty('id')) delete body.id;
//   if (body.hasOwnProperty('description')) delete body.description;
//   if (body.hasOwnProperty('skill_id')) body.skill_id = Number(body.skill_id) || undefined;
//   ret.body = body;
//   return ret;
// }
//
// function updateOrCreate(text, record, id) {
//   if (record && text) {
//     return knex('skill_description').where({ id: record.id }).update({ description: text });
//   } else if (record) {
//     return knex('skill_description').where({ id: record.id }).del();
//   } else if (text) {
//     return knex('skill_description').insert({ id: id, description: text });
//   } else {
//     return Promise.resolve();
//   }
// }
//
// router.readOne = function(where) {
//   return methods.readTask(where);
// };
//
// router.readAll = function(where) {
//   return knex('contributions').select('contributions.id as task_id', 'contributions.*', 'skill_description.*', 'skills.name as skill_name')
//   .leftJoin('skill_description', 'contributions.id', 'skill_description.id')
//   .leftJoin('skills', 'contributions.skill_id', 'skills.id')
//   .where(where).then(function(contributions) {
//     contributions.forEach(function(contribution) {
//       contribution.id = contribution.contribution_id;
//       delete contribution.contribution_id;
//     });
//     return Promise.resolve({ contributions: contributions });
//   });
// };

module.exports = router;
