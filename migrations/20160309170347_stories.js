exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stories', function(table) {
      table.increments('id').primary();
      table.integer('ownerId').unsigned().references('col').inTable('users').references('id');
      table.string('title');
      table.dateTime('startDate');
      table.text('summary');
      table.boolean('editLock');
      table.integer('genreId').unsigned().references('col').inTable('genres').references('id');
      table.dateTime('checkoutTime');
      table.integer('stateId').unsigned().references('col').inTable('states').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('stories')
  ]);
};
