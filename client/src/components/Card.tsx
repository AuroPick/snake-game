import React, { useEffect } from 'react';
import { AnimationControls, motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  animController: AnimationControls;
}

export const Card: React.FC<CardProps> = ({ children, animController }) => {
  useEffect(() => {
    animController.start({ scale: 1 });
  }, [animController]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={animController}
      transition={{ type: 'spring', stiffness: 85 }}
      className="p-6 m-5 flex bg-primary rounded-xl shadow-md justify-between flex-col items-center"
    >
      {children}
    </motion.div>
  );
};
