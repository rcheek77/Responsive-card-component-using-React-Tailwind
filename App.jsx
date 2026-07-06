import React, {useState, useEffect} from 'react';
import { Card } from './components/Cards';
import { FaRegSun } from 'react-icons/fa6';
import { IoMdMoon } from 'react-icons/io';

const App = () => {
  const [theme, setTheme] = useState('light');
  
  const cardData = [
    {
      title: "React Development",
      description: "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fbmcFeacWvjBTD93alz0OLCSoe4q-7M6LHXjEsVQjA3VAUjM-POt2DLq&s=10"
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl: "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75"
    }
  ];

    useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen w-full bg-slate-50 dark:bg-zinc-900 text-zinc-800 dark:text-white transition-colors duration-300`}>
      

      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <h1 className="text-3xl font-bold transition-colors">
          My Card Application
        </h1>

        <button 
          onClick={toggleTheme} 
          className="p-3 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-xl transition-all"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <IoMdMoon className="text-zinc-800 text-xl" />
          ) : (
            <FaRegSun className="text-white text-xl" />
          )}
        </button>
      </div>
        

      <div className="container mx-auto p-4 mt-6">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
