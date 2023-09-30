import React from "react";
import myImage from './myImage.jpg';

const ProfilePic = () => {
  return (
    <div className="w-64 h-64 md:w-84 md:h-84 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gray-300">
      <img
        src={myImage}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfilePic;
