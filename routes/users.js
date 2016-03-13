// var express = require('express');
// var router = express.Router();
// var knex = require('../db/knex');
//
// module.exports = route;
//
// route.use('/:id', function(req, res, next) {
//   req.routeChain = req.routeChain || {};
//   req.routeChain.memberId = req.params.id;
//   next();
// });
// route.use('/:id/stories', stories);
//
// route.get('/:id', function(req, res, next) {
//   route.readOne(req.params.id).then(function(data) {
//     res.json(data);
//   }).catch(next);
// });
//
// route.put('/:id', function(req, res, next) {
//   methods.getPermission(req.user.id).then(function(permission) {
//     if (req.user.id == req.params.id {
//       return prepSkillsUpdate(req.params.id, separatedData).then(function() {
//         res.json({ success: true });
//       });
//     } else {
//       next('You do not have permission to perform this action');
//     }
//   }).catch(next);
// });
//
// route.delete('/:id', function(req, res, next) {
//   methods.getPermission(req.user.id).then(function(permission) {
//     if (req.user.id == req.params.id || req.user.role_name == 'admin') {
//       if (req.user.id == req.params.id) req.logout();
//       return knex('members').where('id', req.params.id).del().then(function() {
//         res.json({ success: true });
//       });
//     } else {
//       next('You do not have permission to perform this action');
//     }
//   }).catch(next);
// });
//
// route.get('/', function(req, res, next) {
//   route.readAll().then(function(data) {
//     res.json(data);
//   }).catch(next);
// });
//
// route.readOne = function(id) {
//   return methods.readUser(id); //methods?
// };
//
// route.readAll = function() {
//   return knex('users').then(function(users) {
//     users.forEach(function(user) {
//       var name = user.display_name.split(' ');
//       user.display_name = [name[0], name[1][0]].join(' ');
//     });
//     return Promise.resolve({ users: users });
//   });
// };
