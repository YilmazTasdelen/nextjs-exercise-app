import { createRouter } from 'next-connect';
import db from '../../utils/db';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

const router = createRouter();

router.get(async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  await User.insertMany([
    {
      name: 'yilmaz',
      email: 'yilmaztasdelen1994@gmail.com',
      password: bcrypt.hashSync('test'),
      isAdmin: true,
      isCoach: true,
      haveCoach: false,
    },
  ]);
  await db.disconnect();
  return res.send({ message: 'seeded successfully' });
});

export default router.handler();
