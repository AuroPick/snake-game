import React, { useState } from 'react';
import { useAnimation } from 'framer-motion';
import { Card, Guideline, Game } from './components';

document.body.className = 'bg-secondary font-sans';

export const App: React.FC = () => {
  const [ShowCard, setShowCard] = useState(true);
  const clickHandler = () => setShowCard(false);

  const animController = useAnimation();

  if (ShowCard)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card
          animController={animController}
          className="p-6 m-5 flex bg-primary rounded-xl shadow-md justify-between flex-col items-center"
          scaleAnimation
        >
          <Guideline onClick={clickHandler} animController={animController} />
        </Card>
      </div>
    );

  return <Game />;
};
