import React from "react";

const SkillBox = ({ image, name, isDark }) => {
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className={`w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-2 pb-8 flex flex-col items-center transition duration-300 transform hover:scale-105 hover:text-indigo-500 hover:bg-gray-200`}>
      <div className="w-4/5 mx-auto h-40 flex items-center justify-center">
        <img
          src={image}
          alt="Skill Logo"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <p className={`text-center text-2xl py-2 ${textColor}`}>
        {name}
      </p>
    </div>
  );
};

export default SkillBox;
