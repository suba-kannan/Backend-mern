import React from 'react'

const LandingPage = ({ textprocess, colortext }) => {
  return (
    <>
      <div style={{backgroundColor:colortext}} className=" text-white flex justify-center items-center h-100">
        {textprocess}
      </div>
    </>
  );
};

export default LandingPage