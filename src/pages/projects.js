import React from "react";
import { ProjectBox } from "../components";
import thriftHubImage from '../images/thriftHub.png';
import drexelAIImage from '../images/drexelAi.png';
import bulletHellImage from '../images/bulletHell.png';

const ProjectPage = ({ isDark }) => {
  const projectData = [
    {
      "name": "ThriftHub",
      "image": thriftHubImage,
      "date": "August 2023",
      "description": "A personal finance tracker fullstack website to keep expenses on track using MERN stack and Firebase for user authentification.",
      "githubLink": "https://github.com/arijitchakma79/ThriftHub",
      "skills": ["MERN", "Firebase", "Full-Stack", "HTML", "TailwindCSS", "JavaScript"]
    },
    {
      "name": "Drexel's AI Website",
      "description": "Official Website of Drexel AI club to explore club's projects and researches.",
      "image": drexelAIImage,
      "date": "July 2023",
      "githubLink": "https://github.com/arijitchakma79/Drexel-AI-Website",
      "skills": ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      "name": "Bullet Hell",
      "image": bulletHellImage,
      "date": "May 2023",
      "description": "A bullet hell game made with Godot and GDscript.",
      "githubLink": "https://github.com/arijitchakma79/bullet-hell",
      "skills": ["Godot", "GDscript"]
    }
  ];

  return (
    <div className={`w-full h-screen ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="project-page w-4/5 mx-auto py-16">
        <div className="flex flex-wrap ">
          {projectData.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <ProjectBox project={project} isDarkMode={isDark} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
