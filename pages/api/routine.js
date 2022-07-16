import { createRouter } from 'next-connect';
import db from '../../utils/db';
import User from '../../models/User';
import Routine from '../../models/Routine';
const router = createRouter();

router.post(async (req, res) => {
  console.log(req);
  await db.connect();
  const newRoutine = new Routine({
    user: req.body.userInfo.id,
    propgram: {
      notes: req.body.notes,
      days: req.body.muscleGroupByDayState,
    },
  });
  const order = await newRoutine.save();
  console.log(order);
  res.status(201).send(newRoutine);
});

export default router.handler();
