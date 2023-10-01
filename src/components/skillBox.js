import React from "react";

const SkillBox = ({ skill }) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="h-32 overflow-hidden">
        <img src={skill.image} alt={skill.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold">{skill.name}</h1>
      </div>
    </div>
  );
};

export default SkillBox;
