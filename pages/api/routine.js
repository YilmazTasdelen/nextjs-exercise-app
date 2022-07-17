import { createRouter } from 'next-connect';
import db from '../../utils/db';
import User from '../../models/User';
import Routine from '../../models/Routine';
import { isAuth } from '../../utils/auth';
import jwt from 'jsonwebtoken';

const router = createRouter();

//TODO: CHECK TOKEN
//router.handler();

router.post(async (req, res) => {
  await db.connect();
  const newRoutine = new Routine({
    user: req.body.userInfo._id,
    propgram: {
      name: req.body.name,
      goal: req.body.goal,
      notes: req.body.notes,
      days: req.body.muscleGroupByDayState,
    },
  });
  const order = await newRoutine.save();
  console.log(order);
  res.status(201).send(newRoutine);
});

router.use(isAuth).get(async (req, res) => {
  console.log('asdasd', req.user);
  await db.connect();
  const routines = await Routine.find({ user: req.user._id });
  res.send(routines);
});
export default router.handler();
