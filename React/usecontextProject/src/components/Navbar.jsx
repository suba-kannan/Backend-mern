
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

const Navbar = () => {

    const {theme,changeTheme}= useContext(ThemeContext)

  return (
    <>
      <div
        className={
          theme
            ? "bg-emerald-600 text-white flex gap-15 p-3 justify-center items-center"
            : "bg-black text-white flex gap-15 p-3 justify-center items-center"
        }
      >
        <div className="flex gap-10 items-center">
          <Link to="/">Home</Link>
          <Link to="/banner">Banner</Link>
          <button
            onClick={changeTheme}
            className={
              theme
                ? "bg-black text-white w-20 p-2 rounded"
                : "bg-white text-black w-20 p-2 rounded"
            }
          >
            {theme ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar