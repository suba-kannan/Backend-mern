import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useState } from 'react'

const ThemeProvider = ({children}) => {

    const [theme,setTheme]= useState(false)

    const changeTheme =()=>{
        setTheme(!theme)
    }


  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeProvider