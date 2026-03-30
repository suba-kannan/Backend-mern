import React from 'react'

const Button = ({show,text}) => {
  return (
    <>
    <button onClick={show}>{text}</button>
    </>
  )
}

export default Button