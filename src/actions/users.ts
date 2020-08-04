import useSWR from 'swr';

import { httpClient } from '@actions/lib/http-client';
import { Auth } from '@interfaces/auth';
import { Path } from '@utils/routes';

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR<Auth>(Path.APIProfile, httpClient.get);
  return { data, error, loading: !data && !error, ...rest };
};
