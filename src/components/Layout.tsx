import Head from 'next/head';
import React, { ReactNode } from 'react';

import { Auth } from '@interfaces/auth';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import Header from './Header';
import withAuthHoc from './hoc/WithAuth';

type Props = {
  children: ReactNode;
  title?: string;
  user: Auth;
  loading: boolean;
};

const Layout = ({ children, title = 'This is the default title', user, loading }: Props) => {
  const childrenWithAuth = React.cloneElement(children as React.ReactElement, { user, loading });
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ScopedCssBaseline>
        <Header>{childrenWithAuth}</Header>
        <footer>
          <hr />
          <span>I am here to stay (Footer)</span>
        </footer>
      </ScopedCssBaseline>
    </div>
  );
};

export default withAuthHoc(Layout);
