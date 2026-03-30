import React from 'react'
import { useRef } from 'react'

const BasicSyntax = () => {
  const inputRef = useRef(null);
  const showRef = useRef(null);
  const handleClick = () => {
    // alert(inputRef.current.value)
    showRef.current.innerHTML = inputRef.current.value;
    showRef.current.style.color = "blue";
    inputRef.current.focus(); //focus on input when button clicked
  };
  return (
    <>
      <div>
        useRef
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click to see</button>
        <p ref={showRef}></p>
      </div>
    </>
  );
};

export default BasicSyntax;