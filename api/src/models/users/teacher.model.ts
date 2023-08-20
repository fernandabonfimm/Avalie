import mongoose, { Schema } from "mongoose";
import { Teacher } from "../../interfaces/users/teacher.interface";

const TeacherSchema: Schema = new Schema<Teacher>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<Teacher>('Teacher', TeacherSchema);
