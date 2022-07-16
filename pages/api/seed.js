// import nc from 'next-connect';
import { createRouter } from 'next-connect';
// import Product from '../../models/Product';
import db from '../../utils/db';
// import data from '../../utils/data';
import User from '../../models/User';

// const handler = nc();
const router = createRouter();

router.get(async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  await User.insertMany([
    {
      name: 'yilmaz',
      email: 'yilmaztasdelen1994@gmail.com',
      password: 'test',
      isAdmin: true,
      isCoach: true,
      haveCoach: false,
    },
  ]);
  // await Product.deleteMany();
  // await Product.insertMany(data.products);
  // await db.disconnect();
  // res.send({ message: 'seeded successfully' });
  await db.disconnect();
  return res.send({ message: 'seeded successfully' });
});

export default router.handler();
