exports.seed = function(knex, Promise) {
  return knex('contributions').del().then(function(){
    return knex('stories').del();
  }).then(function(){
    return knex('users').del();
  }).then(function(){
    return Promise.all([
      knex('statuses').del(),
      knex('states').del(),
      knex('genres').del(),
      knex('genders').del()
    ]);
  }).then(function(){
    return Promise.all([
      require('./real-seeds/genders')(knex, Promise),
      require('./real-seeds/genres')(knex, Promise),
      require('./real-seeds/states')(knex, Promise),
      require('./real-seeds/statuses')(knex, Promise)
    ])
  }).then(function(){
    return Promise.all([
      require('./real-seeds/users')(knex, Promise)
    ])
  }).then(function(){
    return Promise.all([
      require('./real-seeds/stories')(knex, Promise)
    ])
  }).then(function(){
    return Promise.all([
      require('./real-seeds/contributions')(knex, Promise)
    ])
  })
};
