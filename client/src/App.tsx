import React, { useState } from 'react';
import { useAnimation } from 'framer-motion';
import { Card, Guideline, Game } from './components';

document.body.className = 'bg-secondary';

export const App: React.FC = () => {
  const [ShowCard, setShowCard] = useState(true);
  const clickHandler = () => setShowCard(false);

  const animController = useAnimation();

  if (ShowCard)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card animController={animController}>
          <Guideline onClick={clickHandler} animController={animController} />
        </Card>
      </div>
    );

  return <Game />;
};
