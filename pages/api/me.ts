import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { validateRoute } from '../../lib/auth';

export default validateRoute(
	async (req: NextApiRequest, res: NextApiResponse, user: any) => {
		const userGames = await prisma.user.findUnique({
			where: { id: user.id },
			select: { games: true },
		});
		res.json({...user, ...userGames});
	}
);
