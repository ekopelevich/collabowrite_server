exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('stories').del(),
    knex('stories').insert({
      // owner_id: 1,
      title: 'The Tale of the Lost Puppy',
      // start_date: 1457655254170,
      summary: 'A puppy get\'s lost. Oh no!',
      edit_lock: 0,
      // genre_id: 1,
      // checkout_time: 1457655254170,
      // state_id: 1
    }),
    knex('stories').insert({
      // owner_id: 1,
      title: 'Galvanize and the Three Bears',
      // start_date: 1457655254170,
      summary: 'A group of full stack students move in with three bears',
      edit_lock: 0,
      // genre_id: 6,
      // checkout_time: 1457655254170,
      // state_id: 1
    }),
    knex('stories').insert({
      // owner_id: 2,
      title: 'Galvanize and the Three Beers',
      // start_date: 1457655254170,
      summary: 'A group of full stack students fight to the death over three beers.',
      edit_lock: 0,
      // genre_id: 4,
      // checkout_time: 1457655254170,
      // state_id: 1
    })
  ]);
};
