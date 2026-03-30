import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const LocalStorage = () => {
  const inputRef = useRef(null)
  const showRef = useRef(null)

  const [showdata,setShowdata]=useState("")

  useEffect(()=>{
    const data = localStorage.getItem("Data")

   setShowdata(data)

  },[showdata])
  const handleClick =()=>{
    const data = inputRef.current.value
    localStorage.setItem("Data",data)
    showRef.current.innerHTML="success"

  }
  return (
    <>
    <div>
      useRef
      <input type="text" ref={inputRef} value={setShowdata} onChange={handleClick}/>

      <p ref={showRef}></p>

    </div>

    </>
  )
}

export default LocalStorage