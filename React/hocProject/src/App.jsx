// import Button from "./components/Button"
// import withAlert from "./hoc/withAlert"

// const EnhancedComponent = withAlert(Button)

// const App = () => {
//   const showAlert = () => {
//     alert("hello");
//   };

//   const textNew = "This is button hoc";
//   return (
//     <>
//       <EnhancedComponent show={showAlert} text={textNew} />
//       <Button text={"Click me"} />
//     </>
//   );
// }

// export default App

// import React from 'react'
// import withAuth from './hoc/withAuth'
// import Login from './components/Login'
// const AuthDatas = withAuth(Login)

// const App = () => {
//   return (
//     <>

//     <AuthDatas authtext="Register" />
//     <Login authtext={"Login"} />

    
//     </>
//   )
// }

// export default App


import React from 'react'
import LandingPage from './components/LandingPage'
import withLanding from './hoc/withLanding'

const AdminLanding = withLanding(LandingPage)
const VendorLanding = withLanding(LandingPage)

const App = () => {
  return (
    <>
    <LandingPage colortext={"green"} textprocess="This is landing page" />
    <AdminLanding colortext={"blue"} textprocess="This is admin page" />
    <VendorLanding colortext={"red"}  textprocess="This is vendor page" />
    
    </>
  )
}

export default App