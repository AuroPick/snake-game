import { Request, Response } from 'express';
import { Leaderboard } from '../models';

export const getLeaderboard = async (req: Request, res: Response) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ points: -1 }).exec();

    return res.status(200).json({ leaderboard, hasError: false });
  } catch (error) {
    return res.status(500).json({ hasError: true, error: { messsage: error.message } });
  }
};

export const postLeaderboard = async (req: Request, res: Response) => {
  try {
    const { username, points }: { username: string; points: number } = req.body;

    const isExist = await Leaderboard.findOne({ username }).exec();

    if (isExist) {
      const updatedLeaderboard = await Leaderboard.findByIdAndUpdate(isExist._id, { points }, { new: true });

      return res.status(200).json({ updatedLeaderboard, hasError: false });
    }

    const newLeaderboard = new Leaderboard({ username, points });

    const savedLeaderboard = await newLeaderboard.save();

    return res.status(201).json({ savedLeaderboard, hasError: false });
  } catch (error) {
    return res.status(500).json({ hasError: true, error: { message: error.message } });
  }
};
