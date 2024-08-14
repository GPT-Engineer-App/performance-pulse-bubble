import React from 'react';
import { Cat } from 'lucide-react';

const CatInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <Cat className="mr-2 h-8 w-8" />
        About Cats
      </h2>
      <p className="text-gray-700 mb-4">
        Cats, known scientifically as Felis catus, are beloved pets and companions to millions of people worldwide. These agile and independent creatures have been domesticated for thousands of years, yet still retain many of their wild instincts.
      </p>
      <p className="text-gray-700 mb-4">
        With their soft fur, expressive eyes, and playful nature, cats have captured the hearts of humans across cultures. They come in a variety of breeds, each with unique characteristics and personalities.
      </p>
      <p className="text-gray-700">
        Whether they're curled up in a sunny spot for a nap or chasing a toy mouse, cats bring joy and companionship to their human families.
      </p>
    </div>
  );
};

export default CatInfo;