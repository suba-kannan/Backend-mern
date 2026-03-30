import React from 'react'

const Login = ({authtext}) => {
  return (
    <>
      <div>
        <h1>{authtext}</h1>
        <input type="text" placeholder='Enter the email' />
        <input type="password" placeholder='Enter the password' />
        <button>{authtext}</button>

      </div>
    </>
  );
}

export default Login