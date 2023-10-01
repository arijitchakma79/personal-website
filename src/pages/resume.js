import React from "react";
import schoolLogo from '../images/DrexelLogo.png';
import { Skills } from "../components";

const ResumePage = ({ isDark }) => {
  const textStyle = {
    fontFamily: "'Quicksand', sans-serif",
    color: isDark ? "white" : "black",
  };

  return (
    <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-100"} w-full h-screen`}>
      <div className="w-4/5 mx-auto py-8 lg:py-20 ">
        <h1 style={textStyle} className="lg:text-5xl md:text-4xl text-2xl py-2">
          Resume
        </h1>
        <h2 style={textStyle} className="lg:text-4xl md:text-3xl text-xl pt-24">Education</h2>
        <div className="flex">
          <div className="w-1/3 pt-24">
            <img
              src={schoolLogo}
              alt="School Logo"
              className="max-w-full"
            />
          </div>
          <div className="w-2/3 pl-64 pt-52">
            <h1 style={textStyle} className="text-2xl font-bold">
              Drexel University
            </h1>
            <div className="py-4">
              <div className="flex">
                <div className="w-4/5">
                  <p style={textStyle} className="text-lg ">
                  Bachelors of Science in Computer Science
                  </p>
                </div>
                <div className="w-1/2">
                  <p style={textStyle} className="text-lg ">
                    2022-2027
                  </p>
                </div>
              </div>

              <p style={textStyle}  className="text-lg py-2">
                {`Concentration in Artificial Intelligence and Software Engineering`}
              
            </p>
            <p style={textStyle}  className="text-lg py-2">
              Minor in Mathematics
            </p>
            </div>
          </div>          
        </div>
        
      </div>
    </div>
  );
};

export default ResumePage;
