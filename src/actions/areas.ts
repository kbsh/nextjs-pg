import { httpClient } from '@actions/lib/http-client';
import { AreaMaster } from '@server/entities';
import { Path } from '@utils/routes';

export function getAreas() {
  return httpClient.get<AreaMaster[]>(Path.APIAreas);
}
