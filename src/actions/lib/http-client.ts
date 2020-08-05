import axios from 'axios';

import { config } from '@utils/config';
import { Path } from '@utils/routes';

const axiosInstance = axios.create({
  proxy: {
    host: config.host,
    port: config.port,
  },
});

/**
 * fetcher for SWR
 *
 * @param path
 */
export async function fetcher<T>(path: Path): Promise<T> {
  return (await axiosInstance.get<T>(path)).data;
}

