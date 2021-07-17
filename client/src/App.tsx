import React, { useState } from 'react';
import { useAnimation } from 'framer-motion';
import { Card, Guideline, Game, Result } from './components';

document.body.className = 'bg-secondary font-sans';

export const App: React.FC = () => {
  const [showStartCard, setShowStartCard] = useState(true);
  const [showResultCard, setShowResultCard] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const startCardClickHandler = () => setShowStartCard(false);
  const resultCardClickHandler = () => {
    setShowResultCard(false);
    setFinalScore(0);
  };
  const onGameEnd = (score: number) => {
    setFinalScore(score);
    setShowResultCard(true);
  };

  const startAnimController = useAnimation();
  const resultAnimController = useAnimation();

  if (showStartCard)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card
          animController={startAnimController}
          className="p-6 m-5 flex bg-primary rounded-xl shadow-md justify-between flex-col items-center"
          scaleAnimation
        >
          <Guideline onClick={startCardClickHandler} animController={startAnimController} />
        </Card>
      </div>
    );

  if (showResultCard) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card
          animController={resultAnimController}
          className="px-5 md:px-10 lg:px-36 xl:px-56 py-5 flex bg-primary rounded-xl shadow-md justify-between flex-col items-center"
          scaleAnimation
        >
          <Result animController={resultAnimController} score={finalScore} onClick={resultCardClickHandler} />
        </Card>
      </div>
    );
  }

  return <Game onGameEnd={onGameEnd} />;
};
