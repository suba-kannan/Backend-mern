import React from 'react'
import { useRef } from 'react'

const ChangeType = () => {
  const inputRef = useRef(null)
  const showRef = useRef(null)
  const handleClick =()=>{
    showRef.current.innerHTML = inputRef.current.value
    showRef.current.style.color = "blue"
  }
  return (
    <>
    <div>
      useRef
      <input type="text" ref={inputRef} onChange={handleClick}/>

      <p ref={showRef}></p>

    </div>

    </>
  )
}

export default ChangeType