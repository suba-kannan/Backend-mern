import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Banner = () => {
    const {theme}= useContext(ThemeContext)
  return (
    <>
      <div
        className={
          theme
            ? "bg-red-500 h-75 flex justify-center items-center"
            : "bg-purple-500 text-white h-75 flex justify-center items-center"
        }
      >
        Banner
      </div>
    </>
  );
}

export default Banner