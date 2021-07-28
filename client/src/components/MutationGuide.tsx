import React, { useState } from 'react';
import Lottie from 'react-lottie-segments';
import mutation from '../animations/mutation.json';
import throughWall from '../assets/videos/throughWall.mp4';
import throughYourself from '../assets/videos/throughYourself.mp4';

interface MutationGuideProps {
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

export const MutationGuide: React.FC<MutationGuideProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState({ video1: true, video2: true });

  return (
    <>
      <div onClick={onClose} className="absolute top-5 right-5" role="button">
        <button
          type="button"
          className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:bg-secondary"
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Lottie width={150} options={{ loop: true, animationData: mutation }} />
        <h3 className="text-gray-400 text-3xl font-semibold 3xl:text-5xl">Mutation</h3>
      </div>
      <div className="flex flex-col items-center mt-3">
        <p className="text-gray-400 text-lg">You ate the golden apple!</p>
        <p className="text-gray-400 text-md mt-2">Now you can do these for 10 seconds</p>
      </div>
      <div className="flex mt-8 justify-center lg:justify-between flex-wrap ">
        {isLoading.video1 && (
          <div className=" flex justify-center items-center m-5 mx-48">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
          </div>
        )}
        <video
          autoPlay
          loop
          className="w-60 lg:w-96 m-5"
          src={throughWall}
          onCanPlay={() => setIsLoading(prevState => ({ ...prevState, video1: false }))}
        />
        {isLoading.video2 && (
          <div className=" flex justify-center items-center m-5 mx-48">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
          </div>
        )}
        <video
          autoPlay
          loop
          className="w-60 lg:w-96 m-5"
          src={throughYourself}
          onCanPlay={() => setIsLoading(prevState => ({ ...prevState, video2: false }))}
        />
      </div>
    </>
  );
};
