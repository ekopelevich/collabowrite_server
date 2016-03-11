exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('contributions').del(),
    knex('contributions').insert({
      // author_id: 1,
      // story_id: 2,
      title: 'House Rules',
      start_time: 19990108,
      // status: 2
    }),
    knex('contributions').insert({
      // author_id: 2,
      // story_id: 1,
      title: 'Did Somebody Say Monkeys?',
      start_time: 19990108,
      // status: 2
    })
  ]);
};
