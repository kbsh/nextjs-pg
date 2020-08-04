/* eslint-disable @typescript-eslint/no-non-null-assertion */

export const config = {
  isProd: process.env.NODE_ENV === 'production',

  // PostgreSQL
  postgres: {
    url: process.env.DATABASE_URL!,
    ssl: process.env.DATABASE_SSL === 'true',
  },
};
