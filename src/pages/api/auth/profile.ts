import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '../../../utils/auth0';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleProfile(_req, res);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
};

export default handler;
