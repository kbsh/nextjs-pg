import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '@utils/auth0';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleCallback(_req, res, { redirectTo: '/' });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
};

export default handler;
