import { NextApiRequest, NextApiResponse } from 'next';

import auth0 from '@utils/auth0';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleLogin(_req, res);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
