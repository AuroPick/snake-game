import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 85 }}
      className="p-6 m-5 flex bg-primary rounded-xl shadow-md justify-between flex-col items-center"
    >
      {children}
    </motion.div>
  );
};
