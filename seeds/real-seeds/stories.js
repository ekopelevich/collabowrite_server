module.exports = function(knex, Promise) {
  return Promise.all([
    knex('stories').insert({
      user_id: 1,
      title: 'The Tale of the Lost Puppy',
      start_date: '2015-10-30',
      summary: 'A puppy get\'s lost. Oh no!',
      edit_lock: 0,
      genre_id: 1,
      checkout_time: '2015-11-30',
      state_id: 1
    }),
    knex('stories').insert({
      user_id: 1,
      title: 'Galvanize and the Three Bears',
      start_date: '2015-02-03',
      summary: 'A group of full stack students move in with three bears',
      edit_lock: 0,
      genre_id: 6,
      checkout_time: '2016-02-23',
      state_id: 1
    }),
    knex('stories').insert({
      user_id: 2,
      title: 'Galvanize and the Three Beers',
      start_date: '2014-02-23',
      summary: 'A group of full stack students fight to the death over three beers.',
      edit_lock: 0,
      genre_id: 4,
      checkout_time: '2016-02-24',
      state_id: 1
    })
  ]);
};
