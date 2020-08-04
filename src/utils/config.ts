/* eslint-disable @typescript-eslint/no-non-null-assertion */
import IAuth0Settings from '@auth0/nextjs-auth0/dist/settings';

export const config = {
  host: process.env.HOST!,
  // Dynoのポート番号
  port: Number(process.env.PORT),
  origin: process.env.HOST_URL!,

  // Auth0
  auth0: {
    domain: process.env.AUTH0_DOMAIN!,
    clientId: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    redirectUri: process.env.AUTH0_CALLBACK_URL!,
  } as IAuth0Settings,

  // PostgreSQL
  postgres: {
    url: process.env.DATABASE_URL!,
    ssl: process.env.DATABASE_SSL === 'true',
  },
};
