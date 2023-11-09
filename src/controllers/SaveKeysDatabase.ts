import knex from '../database/knex';

interface InsertKeysDatabaseInterface {
  create(name: string, key: string): Promise<void>;
}

class UsersController implements InsertKeysDatabaseInterface {
  async create(name: string, key: string): Promise<void> {
    await knex('keys').insert({
      name,
      key,
    });
  }
}

export default UsersController;
