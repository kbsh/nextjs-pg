import { NextApiRequest, NextApiResponse } from 'next';

import * as AreaMasterRepository from '@repositories/area-master';
import auth0 from '@utils/auth0';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const areas = await AreaMasterRepository.findAll();

    if (!Array.isArray(areas)) {
      throw new Error('Cannot find area-master');
    }

    res.status(200).json(areas);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default auth0.requireAuthentication(handler);
