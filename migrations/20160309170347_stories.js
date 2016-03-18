exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stories', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('col').inTable('users').references('id');
      table.string('title');
      table.dateTime('start_date');
      table.text('summary');
      table.boolean('edit_lock');
      table.integer('genre_id').unsigned().references('col').inTable('genres').references('id');
      table.dateTime('checkout_time');
      table.integer('state_id').unsigned().references('col').inTable('states').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('stories')
  ]);
};
