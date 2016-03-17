exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('starredStories_users', function(table) {
      table.increments('id').primary();
      table.integer('storyId').unsigned().references('col').inTable('stories').references('id');
      table.integer('userId').unsigned().references('col').inTable('users').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('starredStories_users')
  ]);
};
