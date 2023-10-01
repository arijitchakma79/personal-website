import React from "react";

const ProjectBox = ({ project, isDarkMode }) => {
  // Join the skills array into a comma-separated string
  const skillsString = project.skills.join(", ");

  // Conditionally set text color based on isDarkMode
  const textColorClass = isDarkMode ? " text-gray-300" : "text-gray-800";

  return (
    <div className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer min-h-[500px] ${isDarkMode ? 'border border-gray-800' : ''}`}>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <img
          alt={project.name}
          className="block h-auto w-full rounded-t-lg object-cover"
          src={project.image}
        />
      </a>

      <div className="p-4">
        <h1 className={`text-2xl font-semibold ${textColorClass} hover:text-blue-500`}>
          <a
            className="no-underline hover:underline"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name}
          </a>
        </h1>
        <p className={` text-sm mt-1 ${textColorClass}`}>Date of Creation: {project.date}</p>
        
        <p className={`mt-4 ${textColorClass}`}>{project.description}</p>

        <div className={`mt-4 ${textColorClass}`}>
          <p className=" font-semibold">Skills: {skillsString}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
