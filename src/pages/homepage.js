import React from "react";
import { ProfilePic, Bios, AboutMe } from "../components";

const HomePage = ({ isDarkMode }) => {
  // Define styles for dark and light mode
  const darkModeStyles = {
    backgroundColor: "#1a202c", 
    color: "#fff",
  };

  const lightModeStyles = {
    backgroundColor: "#fff",
    color: "#333",
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} ` } style={{ minHeight: '90vh' }}>
      <div className="flex flex-col md:flex-row py-12 px-8 md:px-16 lg:px-24">
        <div className="md:w-1/3 md:p-10 ">
          <ProfilePic />
        </div>
        <div className="md:w-2/3">
          <Bios />
        </div>
      </div>
      <div>
        <AboutMe isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;