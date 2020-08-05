import { useGetUser } from '@actions/users';
import { Path } from '@utils/routes';

import Redirect from '../Redirect';

const withAuthHoc = (Component: any) => {
  return (props: any) => {
    const { data, loading } = useGetUser();
    if (loading) {
      return <p>Loading...</p>;
    }
    if (!data) {
      return <Redirect ssr to={Path.APILogin} />;
    } else {
      return <Component user={data} loading={loading} {...props} />;
    }
  };
  // return (props: any) => {
  //   const { req, res } = props;
  //   if (typeof window === 'undefined') {
  //     const session = auth0.getSession(req);
  //     if (!session || !session.user) {
  //       res.writeHead(302, {
  //         Location: '/api/auth/login',
  //       });
  //       res.end();
  //       return;
  //     }

  //     return <Component user={session.user} {...props} />;
  //   }
  // };
};
export default withAuthHoc;
