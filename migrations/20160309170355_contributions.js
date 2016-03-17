exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('contributions', function(table) {
      table.increments('id').primary();
      table.integer('authorId').unsigned().references('col').inTable('users').references('id');
      table.integer('storyId').unsigned().references('col').inTable('stories').references('id');
      table.string('title');
      table.string('body');
      table.dateTime('startTime');
      table.integer('status').unsigned().references('col').inTable('statuses').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('contributions')
  ]);
};
