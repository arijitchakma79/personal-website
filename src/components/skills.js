import React from "react";
import PythonLogo from '../images/python.png';
import {SkillBox} from "./";

const Skills = () => {
  const skills = [
    {
      "name": "Python",
      "image": PythonLogo,
    },
    // Add more skills here
  ];

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-4/5 mx-auto py-16">
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <SkillBox skill={skill} /> {/* Use the SkillBox component */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
