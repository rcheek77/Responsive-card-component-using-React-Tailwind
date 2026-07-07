import React from 'react';

export const Card = ({ title, description, buttonText, imageUrl }) => {
  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white hover:bg-sky-300 dark:bg-zinc-800 dark:hover:bg-sky-700 transition-colors duration-200">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">

        <div className="font-bold text-xl mb-2 text-zinc-900 dark:text-white">{title}</div>

        <p className="text-gray-700 text-base dark:text-zinc-200">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-500">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
