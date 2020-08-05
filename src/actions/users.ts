import useSWR from 'swr';

import { fetcher } from '@actions/lib/http-client';
import { Auth } from '@interfaces/auth';
import { Path } from '@utils/routes';

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR<Auth>(Path.APIProfile, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
