import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/CountContext'

const CountOne = () => {
    const { count, changeCount } = useContext(CountContext);
  return (
    <>
      <p>{count}</p>
      <button className="bg-blue-600 p-2 rounded" onClick={changeCount}>
        Click
      </button>
    </>
  );
}

export default CountOne