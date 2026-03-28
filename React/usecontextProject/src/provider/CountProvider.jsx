import React from 'react'
import CountContext from '../context/CountContext'
import { useState } from 'react'

const CountProvider = ({children}) => {

    const [count,setCount]=useState(0)

    const changeCount=()=>{
        setCount(count+1);
    }
  return (
    <>
      <CountContext.Provider value={{ count, changeCount }}>
        {children}
      </CountContext.Provider>
    </>
  );
}

export default CountProvider