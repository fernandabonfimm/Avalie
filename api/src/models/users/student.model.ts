import mongoose, { Schema } from "mongoose";
import { Student } from "../../interfaces/users/student.interface";

const StudentSchema: Schema = new Schema<Student>({
  pin: { type: Number, required: true, unique: true },
  answer: { type: String, required: false },
});

export default mongoose.model<Student>("Student", StudentSchema);
