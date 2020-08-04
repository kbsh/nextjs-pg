import { AreaMaster } from '@entities';
import { getDbConnection } from '@server/db';

export async function findAll() {
  return await (await getDbConnection()).manager.find(AreaMaster);
}
