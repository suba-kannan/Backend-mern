import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Home = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? "bg-amber-400 h-75 flex justify-center items-center"
          : "bg-blue-400 text-white h-75 flex justify-center items-center"
      }
    >
      Home
    </div>
  );
}

export default Home