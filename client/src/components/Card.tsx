import React, { useEffect } from 'react';
import { AnimationControls, motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  animController: AnimationControls;
  className?: string;
  scaleAnimation?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, animController, className, scaleAnimation }) => {
  useEffect(() => {
    if (scaleAnimation) animController.start({ scale: 1 });
  }, [animController, scaleAnimation]);

  return (
    <motion.div
      initial={scaleAnimation && { scale: 0 }}
      animate={animController}
      transition={{ type: 'spring', stiffness: 85 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
