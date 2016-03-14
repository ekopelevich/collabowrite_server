module.exports = function(knex, Promise) {
  return Promise.all([
    knex('states').insert({id: 1, state: 'active'}),
    knex('states').insert({id: 2, state: 'complete'}),
    knex('states').insert({id: 3, state: 'closed'})
  ]);
};
