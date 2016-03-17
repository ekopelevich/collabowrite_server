module.exports = function(knex, Promise) {
  return Promise.all([
    knex('stories').insert({
      ownerId: 1,
      title: 'The Tale of the Lost Puppy',
      startDate: '2015-10-30',
      summary: 'A puppy get\'s lost. Oh no!',
      editLock: 0,
      genreId: 1,
      checkoutTime: '2015-11-30',
      stateId: 1
    }),
    knex('stories').insert({
      ownerId: 1,
      title: 'Galvanize and the Three Bears',
      startDate: '2015-02-03',
      summary: 'A group of full stack students move in with three bears',
      editLock: 0,
      genreId: 6,
      checkoutTime: '2016-02-23',
      stateId: 1
    }),
    knex('stories').insert({
      ownerId: 2,
      title: 'Galvanize and the Three Beers',
      startDate: '2014-02-23',
      summary: 'A group of full stack students fight to the death over three beers.',
      editLock: 0,
      genreId: 4,
      checkoutTime: '2016-02-24',
      stateId: 1
    })
  ]);
};
