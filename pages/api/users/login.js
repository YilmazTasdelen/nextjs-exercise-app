import { createRouter } from 'next-connect';

import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/auth';
import db from '../../../utils/db';

const router = createRouter();

router.post(async (req, res) => {
  console.log(req.body);
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  await db.connect();
  console.log(user);
  if (user && bcrypt.compare(req.body.password, user.password)) {
    const token = signToken(user);
    res.status(200).send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isCoach: user.isCoach,
      haveCoach: user.haveCoach,
    });
  } else {
    res.status(401).send({ message: 'Invalid username or password' });
  }
  // res.status(200).send({ message: 'Invalid username or password' });
});

export default router.handler();
