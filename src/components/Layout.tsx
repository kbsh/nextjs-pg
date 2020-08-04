import Head from 'next/head';
import React, { ReactNode } from 'react';

import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import Header from './Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ScopedCssBaseline>
      <Header />
      {children}
      <footer>
        <hr />
        <span>I am here to stay (Footer)</span>
      </footer>
    </ScopedCssBaseline>
  </div>
);

export default Layout;
