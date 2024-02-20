exports.up = (knex) =>
  knex.schema.createTable('keys', (table) => {
    table.increments('id');
    table.text('name');
    table.text('key');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('keys');
