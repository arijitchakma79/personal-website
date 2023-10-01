import React from "react";
import schoolLogo from '../images/DrexelLogo.png';
import pythonLogo from '../images/python.png';
import javascriptLogo from '../images/JavaScript.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import { SkillBox, Award, DownloadResume } from "../components";
import cppLogo from '../images/Cpp.png';
import javaLogo from '../images/Java.png';
import reactLogo from '../images/React.png';
import nodeLogo from '../images/node.jpg';
import mongoDB from '../images/mongoDB.png';
import firebaseLogo from '../images/firebase.png';
import gitHubLogo from '../images/git.png';

const ResumePage = ({ isDark }) => {
  const textStyle = {
    fontFamily: "'Quicksand', sans-serif",
    color: isDark ? "white" : "black",
  };

  const awards = {
    "1": {
      "name": "Drexel Global Scholarship",
      "description": "Full ride Scholarship given to 13 international students in 2022.",
      "awardedYear": "2022"
    },
    "2": {
      "name": "Dean's List 2023",
      "description": "Awarded for outstanding academic performance and a GPA over 3.70",
      "awardedYear": "2023"
    }
  }

  return (
    <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-100"} w-full`} style={{ minHeight: '90vh' }}>
      <div className="w-4/5 mx-auto py-8 lg:py-20 ">
        <h1 style={textStyle} className="lg:text-5xl md:text-4xl text-3xl py-2">
          Resume
        </h1>
        <div className="pt-12">
          <DownloadResume />
        </div>
        
        <h2 style={textStyle} className="lg:text-4xl md:text-3xl text-2xl pt-24">Education</h2>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 pt-4 sm:pt-8">
            <img
              src={schoolLogo}
              alt="School Logo"
              className="max-w-full w-3/4 transition-transform hover:rotate-360"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/3 pl-4 sm:pl-8 pt-4 sm:pt-8">
            <h1 style={textStyle} className="text-2xl font-bold">
              Drexel University
            </h1>
            <div className="py-4">
              <div className="flex flex-wrap items-center">
                <div className="w-full sm:w-4/5 lg:w-4/5">
                  <p style={textStyle} className="text-md sm:text-lg md:text-xl ">
                    Bachelors of Science in Computer Science 
                  </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <p style={textStyle} className="text-sm sm:text-md md:text-lg lg:text-xl ">
                    | Sep 2022- July 2027
                  </p>
                </div>
              </div>

              <p style={textStyle} className="text-md sm:text-lg md:text-xl py-2">
                {`Concentration in Artificial Intelligence and Software Engineering`}
              </p>
              <p style={textStyle} className="text-md sm:text-lg md:text-xl pt-2">
                Minor in Mathematics
              </p>
            </div>
          </div>
        </div>
        <div className="w-full py-8">
          <h2 style={textStyle} className="lg:text-4xl md:text-3xl text-2xl pt-4 md:pt-16 lg:pt-24">Skills</h2>
          <div>
            <div className="w-full pt-16">
              <div className="flex flex-wrap">
                <SkillBox image={pythonLogo} name="Python" isDark={isDark} />
                <SkillBox image={javascriptLogo} name="JavaScript" isDark={isDark} />
                <SkillBox image={htmlLogo} name="HTML" isDark={isDark} />
                <SkillBox image={cssLogo} name="CSS" isDark={isDark} />
                <SkillBox image={cppLogo} name="C++" isDark={isDark} />
                <SkillBox image={javaLogo} name="Java" isDark={isDark} />
                <SkillBox image={reactLogo} name="React" isDark={isDark} />
                <SkillBox image={nodeLogo} name="Node.js" isDark={isDark} />
                <SkillBox image={mongoDB} name="MongoDB" isDark={isDark} />
                <SkillBox image={firebaseLogo} name="Firebase" isDark={isDark} />
                <SkillBox image={gitHubLogo} name="Git" isDark={isDark} />
              </div>
            </div>
          </div>
          <div>
            <h2 style={textStyle} className="lg:text-4xl md:text-3xl text-2xl pt-20">Awards</h2>
            <div className="pt-8">
              {Object.keys(awards).map((awardKey) => {
                const award = awards[awardKey];
                return (
                  <Award
                    key={awardKey}
                    name={award.name}
                    date={award.awardedYear}
                    description={award.description}
                    isDark={isDark}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
