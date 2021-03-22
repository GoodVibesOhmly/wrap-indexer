import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('erc20_wraps', table => {
    table.bigInteger('finalized_at_level');
  });
  await knex.schema.table('erc721_wraps', table => {
    table.bigInteger('finalized_at_level');
  });
  await knex.schema.table('erc20_unwraps', table => {
    table.bigInteger('finalized_at_level');
  });
  await knex.schema.table('erc721_unwraps', table => {
    table.bigInteger('finalized_at_level');
  });
}

export async function down(_knex: Knex): Promise<void> {
  return Promise.resolve();
}
