module.exports = function(knex, Promise) {
  return Promise.all([
    knex('genders').insert({id: 1, gender: 'female'}),
    knex('genders').insert({id: 2, gender: 'male'}),
    knex('genders').insert({id: 3, gender: 'other'})
  ]);
};
