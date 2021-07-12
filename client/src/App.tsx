import React, { useState } from 'react';
import { Card, Guideline } from './components';

export const App: React.FC = () => {
  const [ShowCard, setShowCard] = useState(true);
  const clickHandler = () => setShowCard(false);

  if (ShowCard)
    return (
      <div className="bg-secondary flex w-screen h-screen justify-center items-center overflow-hidden">
        <Card>
          <Guideline onClick={clickHandler} />
        </Card>
      </div>
    );

  return <div>xd</div>;
};
