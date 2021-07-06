import { Schema, Document, model } from 'mongoose';

interface leaderboardSchemaInterface extends Document {
  username: string;
  points: number;
}

const leaderboardSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

export const Leaderboard = model<leaderboardSchemaInterface>('Leaderboard', leaderboardSchema);
