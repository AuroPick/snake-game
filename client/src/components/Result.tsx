import React, { useEffect, useState } from 'react';
import { motion, AnimationControls } from 'framer-motion';
import { useToasts } from 'react-toast-notifications';
import { getLeaderboard as get, postLeaderboard as post } from '../api';
import { User } from './User';

interface ResultProps {
  score: number;
  animController: AnimationControls;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface Leaderboard {
  _id?: string;
  username: string;
  score: number;
}

export const Result: React.FC<ResultProps> = ({ score, animController, onClick }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<Leaderboard[] | null>(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const { addToast } = useToasts();

  const checkUsername = (checkingUsername: string | null) => {
    if (checkingUsername) {
      const isOk = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(checkingUsername);

      return isOk;
    }

    return false;
  };

  const getLeaderboard = async () => {
    try {
      const { data } = await get();

      if (!data.hasError) setLeaderboard(data.leaderboard);
    } catch (error) {
      console.log(error);
    }
  };

  const postLeaderboard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isOk = checkUsername(username);
    if (!isOk)
      return addToast(
        <span>
          - Username consists of alphanumeric characters (a-zA-Z0-9), lowercase, or uppercase.
          <br />
          <br />- Must be between 5 and 20 characters long.
          <br />
          <br />- The dot (.), underscore (_), or hyphen (-) must not be the first or last character.
        </span>,
        { appearance: 'error' }
      );
    const sendData = {
      username: username || 'anon',
      score,
    };
    try {
      const { data } = await post(sendData);

      if (data.hasError) return addToast(data.error.message, { appearance: 'error' });
      setIsSubmit(true);
      addToast('Saved', { appearance: 'success', autoDismiss: true });
      getLeaderboard();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <>
      <h3 className="text-3xl lg:text-5xl text-gray-300 font-bold">Game Over</h3>
      <div className="flex flex-col mx-auto items-center mt-8 overflow-y-auto bg-gray-900 rounded-xl py-6 px-10 max-h-56 scroll">
        <h4 className="text-l lg:text-2xl text-gray-300 font-semibold mb-3">Leaderboard</h4>
        <div className="w-44 lg:w-96">
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-400 font-bold">Username</p>
            <p className="text-lg text-gray-400 font-bold">Score</p>
          </div>
          {leaderboard?.map(user => (
            <User username={user.username} score={user.score} key={user._id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-5">
        <div className="flex flex-col items-center md:mr-20">
          <h4 className="text-xl lg:text-3xl text-gray-300 font-bold">Your Score</h4>
          <h5 className="text-xl lg:text-3xl text-gray-300 font-semibold mt-1">{score}</h5>
        </div>
        <form onSubmit={postLeaderboard} className="flex flex-col justify-center items-center">
          <input
            type="text"
            className="bg-gray-900 px-5 py-3 rounded-lg mt-5 text-gray-300 w-full"
            placeholder="Username..."
            onChange={e => setUsername(e.target.value)}
            required
          />
          <div className="flex flex-col md:flex-row items-center">
            <motion.button
              style={{ willChange: 'transform', cursor: isSubmit || score === 0 ? 'not-allowed' : 'pointer' }}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: 'tween',
                  ease: 'easeInOut',
                },
              }}
              // @ts-ignore
              type="submit"
              className="bg-gray-400 px-10 py-3 text-gray-900 font-bold rounded mt-5 md:mr-5"
              disabled={isSubmit || score === 0}
            >
              SAVE SCORE
            </motion.button>
            <motion.button
              onClick={async e => {
                await animController.start({
                  y: 100,
                  opacity: 0,
                });
                onClick(e);
              }}
              style={{ willChange: 'transform' }}
              whileHover={{
                scale: 1.1,
                transition: {
                  type: 'tween',
                  ease: 'easeInOut',
                },
              }}
              // @ts-ignore
              type="button"
              className="bg-gray-400 px-10 py-3 text-gray-900 font-bold rounded mt-5"
            >
              PLAY AGAIN
            </motion.button>
          </div>
        </form>
      </div>
    </>
  );
};
