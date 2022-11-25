import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

interface JwtPayload {
	id: string;
}

export const validateRoute = (handler: Function) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		const { JIM_ACCESS_TOKEN: token } = req.cookies;

		if (token) {
			let user;

			try {
				const { id } = jwt.verify(token, 'hello') as JwtPayload;
				user = await prisma.user.findUnique({
					where: { id },
				});
			} catch (e) {
        res.status(401).json({ error: 'Not Authorized'});
        return;
      }

      return handler(req, res, user);
		}

    res.status(401).json({ error: 'Not Authorized'});
	};
};
