import mongoose, { Schema } from "mongoose";
import { Avaliation } from "../../interfaces/avaliation/avaliation.interface";

const AvaliationSchema: Schema = new Schema<Avaliation>({
  pin: { type: Number, required: true, unique: true },
  questions: [
    {
      question: String,
      answer: String,
    },
  ],
  teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
});

export default mongoose.model<Avaliation>("Avaliation", AvaliationSchema);
