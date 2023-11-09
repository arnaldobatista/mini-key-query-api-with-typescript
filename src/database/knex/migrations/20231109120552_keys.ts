import { Knex } from 'knex';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable('keys', (table) => {
    table.increments('id');
    table.text('name')
    table.text('key')
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable('keys');
