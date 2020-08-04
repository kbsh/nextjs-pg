import axios from 'axios';

import { config } from '@utils/config';

const axiosInstance = axios.create({
  proxy: {
    host: config.host,
    port: config.port,
  },
});

async function get<T>(url: string): Promise<T> {
  return (await axiosInstance.get<T>(url)).data;
}

export const httpClient = {
  get,
};
