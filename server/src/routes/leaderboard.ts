import { Router } from 'express';
import { getLeaderboard, postLeaderboard } from '../controllers';

export const router = Router();

router.get('/', getLeaderboard);
router.post('/', postLeaderboard);
