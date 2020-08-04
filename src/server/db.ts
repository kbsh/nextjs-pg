import { createConnection, getConnectionManager } from 'typeorm';

import * as Entities from '@entities';

import { config } from './config';

// TODO singletonにしたい
export async function getDbConnection() {
  const manage = getConnectionManager();
  if (manage.has('default')) {
    const connection = manage.get('default');
    await connection.close();
  }
  return createConnection({
    type: 'postgres',
    url: config.postgres.url,
    entities: Object.keys(Entities).map((key) => Entities[key]),
    synchronize: false,
    ssl: config.postgres.ssl,
  });
}
