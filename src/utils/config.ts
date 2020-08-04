/* eslint-disable @typescript-eslint/no-non-null-assertion */
import IAuth0Settings from '@auth0/nextjs-auth0/dist/settings';

export const config = {
  isProd: process.env.NODE_ENV === 'production',

  host: process.env.HOST!,
  // Dynoのポート番号
  port: Number(process.env.PORT),

  // Auth0
  auth0: {
    domain: process.env.AUTH0_DOMAIN!,
    clientId: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    redirectUri: process.env.AUTH0_CALLBACK_URL!,
  } as IAuth0Settings,
};
