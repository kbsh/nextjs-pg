import ErrorPage from 'next/error';
import useSWR from 'swr';

import { fetcher } from '@actions/lib/http-client';
import { Path } from '@utils/routes';

function withSWRHoc<T>(Component: any, path: Path) {
  return (props: any) => {
    const { data, error } = useSWR<T>(path, fetcher);
    if (error) {
      return <ErrorPage statusCode={404} />;
    } else if (!data) {
      return <p>Loading...</p>;
    } else {
      return <Component data={data} {...props} />;
    }
  };
}

export default withSWRHoc;
