import { Document } from "mongoose";

export interface Student extends Document {
  pin: number;
  answer: string;
}
