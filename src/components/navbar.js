import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ isDarkMode, toggleDarkMode, name }) {
  // CSS classes for dark and light modes
  const navbarClasses = `py-2 h-16 px-4 flex justify-between items-center   ${
    isDarkMode
      ? 'bg-gray-900 text-white shadow-lg'
      : 'bg-gray-white text-gray-900 shadow-md'
  }`;

  const darkModeButtonClasses = `bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 ${
    isDarkMode ? 'bg-opacity-60' : 'bg-opacity-30'
  }`;

  // Inline CSS to set the font-family
  const textStyle = {
    fontFamily: "'Mulish', sans-serif",
  };

  return (
    <div className={navbarClasses}>
      
       <h1 className="text-3xl px-4 font-bold" style={textStyle}>{name}</h1>
      
      <ul className="space-x-16">
        <li className="inline-block">
          <NavLink to={'/'} className="hover:underline text-xl " style={textStyle}>
            Home
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink to={'/projects'} className="hover:underline text-xl " style={textStyle}>
            Projects
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink to={'/resume'} className="hover:underline text-xl " style={textStyle}>
            Resume
          </NavLink>
        </li>
      </ul>
      <button
        className={darkModeButtonClasses}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default Navbar;
