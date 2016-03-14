module.exports = function(knex, Promise) {
  return Promise.all([
    knex('statuses').insert({id: 1, status: 'pending'}),
    knex('statuses').insert({id: 2, status: 'approved'}),
    knex('statuses').insert({id: 3, status: 'rejected'})
  ]);
};
