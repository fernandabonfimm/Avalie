import { Document, Schema } from "mongoose";

interface Question {
  question: string;
  answer: string | null;
}

export interface Avaliation extends Document {
  pin: number;
  questions: Question[];
  teacher: Schema.Types.ObjectId;
}
