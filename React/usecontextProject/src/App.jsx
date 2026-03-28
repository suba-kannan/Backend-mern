import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Home from './components/Home';
import ThemeProvider from './provider/ThemeProvider';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';
import CountProvider from './provider/CountProvider';

const App = () => {


  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </ThemeProvider>

      <CountProvider>
        <CountOne />
        <CountTwo />
      </CountProvider>
    </>
  );
}

export default App