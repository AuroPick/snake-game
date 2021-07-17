import React, { useState, useEffect } from 'react';
import {
  ArrowNarrowDownIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ArrowNarrowUpIcon,
} from '@heroicons/react/solid';
import Lottie from 'react-lottie-segments';
import { motion, AnimationControls } from 'framer-motion';
import snake from '../animations/snake.json';
import speedBoost from '../animations/speedBoost.json';
import { ReactComponent as Spacebar } from '../assets/icons/space-bar.svg';

interface GuidelineProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  animController: AnimationControls;
}

export const Guideline: React.FC<GuidelineProps> = ({ onClick, animController }) => {
  const [, setTrigger] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: snake,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const speedBoostOptions = {
    loop: true,
    autoplay: false,
    animationData: speedBoost,
  };

  useEffect(() => {
    setTrigger(prevState => !prevState);
  }, []);

  return (
    <>
      <h3 className="text-3xl lg:text-5xl text-gray-300 font-bold">How To Play</h3>
      <div className="flex flex-wrap justify-center lg:justify-between w-full my-32">
        <div className="flex flex-col items-center w-52 mx-5">
          {/*
            // @ts-ignore */}
          <Lottie
            width={200}
            className="w-8"
            options={defaultOptions}
            playSegments={{ segments: [80, 120], forceFlag: true }}
            speed={0.5}
          />
          <ArrowNarrowLeftIcon className="h-16 text-gray-400" />
          <p className="text-center text-gray-200 mt-3">Press left arrow key to turn left</p>
        </div>
        <div className="flex flex-col items-center w-52 mx-5">
          {/*
            // @ts-ignore */}
          <Lottie
            width={200}
            className="w-8"
            options={defaultOptions}
            playSegments={{ segments: [100, 144], forceFlag: true }}
            speed={0.5}
          />
          <ArrowNarrowDownIcon className="h-16 text-gray-400" />
          <p className="text-center text-gray-200 mt-3">Press down arrow key to turn down</p>
        </div>
        <div className="flex flex-col items-center w-52 mx-5">
          {/*
            // @ts-ignore */}
          <Lottie
            width={200}
            className="w-8"
            options={defaultOptions}
            playSegments={{ segments: [46, 86], forceFlag: true }}
            speed={0.5}
          />
          <ArrowNarrowUpIcon className="h-16 text-gray-400" />
          <p className="text-center text-gray-200 mt-3">Press up arrow key to turn up</p>
        </div>
        <div className="flex flex-col items-center w-52 mx-5">
          <Lottie
            width={200}
            className="w-8"
            options={defaultOptions}
            playSegments={{ segments: [130, 160], forceFlag: true }}
            speed={0.5}
          />
          <ArrowNarrowRightIcon className="h-16 text-gray-400" />
          <p className="text-center text-gray-200 mt-3">Press right arrow key to turn right</p>
        </div>
        <div className="flex flex-col items-center w-52 mx-5">
          <Lottie width={100} options={speedBoostOptions} style={{ marginLeft: '2.8rem' }} />
          <Spacebar width={100} style={{ color: 'rgb(156, 163, 175)' }} />
          <p className="text-center text-gray-200 mt-3">Hold down spacebar to increase speed</p>
        </div>
      </div>
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
        className="bg-gray-400 px-10 py-3 text-gray-900 font-bold rounded"
      >
        START
      </motion.button>
    </>
  );
};
