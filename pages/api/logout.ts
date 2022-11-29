import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const user  = req.body;
  
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        token: ''
      }
    })
    res.status(200).json(updatedUser);
  } catch(e) {
    res.status(500).json({error: 'Server error'});
  }

}
