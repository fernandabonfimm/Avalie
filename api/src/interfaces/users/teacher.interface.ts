import { Document } from 'mongoose';

export interface Teacher extends Document{
    username: string;
    password: string;
}