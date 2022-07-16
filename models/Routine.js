import mongoose from 'mongoose';

const RoutineSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    propgram: {
      notes: { type: String, required: false },
      days: [
        {
          id: { type: Number, required: true },
          muscleGroups: [{ type: String, required: false }],
          exercises: [{ type: String, required: false }],
          exerciseReps: [
            {
              id: { type: Number, required: true },
              rep: { type: Number, required: true },
              set: { type: Number, required: true },
            },
          ],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Routine =
  mongoose.models.Routine || mongoose.model('Routine', RoutineSchema);
export default Routine;
