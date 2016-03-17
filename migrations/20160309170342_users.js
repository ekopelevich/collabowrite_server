exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.string('location');
      table.integer('genderId').unsigned().references('col').inTable('genders').references('id');
      table.string('tagLine');
      table.text('bio');
      table.dateTime('memberSince');
      table.string('avatar');
      table.boolean('banned');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('users')
  ]);
};
