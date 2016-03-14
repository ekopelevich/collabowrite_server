module.exports = function(knex, Promise) {
  return Promise.all([
    knex('genres').insert({id: 1, genre: 'Let\'s see what happens!'}),
    knex('genres').insert({id: 2, genre: 'childrens'}),
    knex('genres').insert({id: 3, genre: 'comedy'}),
    knex('genres').insert({id: 4, genre: 'drama'}),
    knex('genres').insert({id: 5, genre: 'fantasy'}),
    knex('genres').insert({id: 6, genre: 'historical fiction'}),
    knex('genres').insert({id: 7, genre: 'horror'}),
    knex('genres').insert({id: 8, genre: 'mystery'}),
    knex('genres').insert({id: 9, genre: 'romance'}),
    knex('genres').insert({id: 10, genre: 'satire'}),
    knex('genres').insert({id: 11, genre: 'science fiction'}),
    knex('genres').insert({id: 12, genre: 'tragedy'}),
    knex('genres').insert({id: 13, genre: 'young adult'})
  ]);
};
