import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { validateRoute } from '../../lib/auth';

export default validateRoute(
	async (req: NextApiRequest, res: NextApiResponse, user: any) => {
		res.json(user);
	}
);
