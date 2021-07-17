import React from 'react';

interface UserProps {
  username: string;
  score: number;
}

export const User: React.FC<UserProps> = ({ username, score }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-lg text-gray-400">{username}</p>
      <p className="text-lg text-gray-400">{score}</p>
    </div>
  );
};
