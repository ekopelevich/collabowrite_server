module.exports = function(knex, Promise) {
  return Promise.all([
    knex('contributions').insert({
      authorId: 1,
      storyId: 2,
      title: 'House Rules',
      body: 'stuff',
      startTime: 19990108,
      status: 2
    }),
    knex('contributions').insert({
      authorId: 2,
      storyId: 1,
      title: 'Did Somebody Say Monkeys?',
      body: 'things',
      startTime: 19990108,
      status: 2
    })
  ]);
};
