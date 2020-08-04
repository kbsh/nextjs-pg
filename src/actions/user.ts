import useSWR from 'swr';

import { Auth } from '../interfaces/auth';
import { httpClient } from '../utils/http-client';
import { Path } from '../utils/routes';

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR<Auth>(Path.APIProfile, httpClient.get);
  return { data, error, loading: !data && !error, ...rest };
};
