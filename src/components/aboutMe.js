import React, { useState } from 'react';
import clubData from '../personalDatas.json'

const AboutMe = ({ isDarkMode }) => {
  // Define styles based on dark mode
  const textStyle = {
    fontFamily: "'Quicksand', sans-serif",
    color: isDarkMode ? 'white' : 'black',
  };

  // State to control the visibility of additional content
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the visibility of additional content
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`w-4/5 sm:w-100 mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white text-gray-900'}`} style={textStyle}>
      <h1 className="text-2xl md:text-4xl lg:text-4xl">Hey there!</h1>
      <p className="text-md md:text-lg leading-relaxed py-4">
        My name is {clubData.main.name}. Despite my initial lack of coding experience, I quickly found myself drawn to the world of computer science, and I've since become passionate about various aspects,
        including Software Engineering, AI/ML, and Data Science.
      </p>
      <p className="text-md md:text-lg leading-relaxed py-2">
        What sets me apart is not just my academic pursuits, but also my vision for the future.
        I'm on a mission to make a positive impact, especially within my Chakma community. Hailing from the Chittagong Hill Tracts of Bangladesh, the Chakma community
        is often underrepresented in tech. I envision creating an organization that promotes collaboration and empowerment on technology among the Chakma youths.
      </p>

      {showMore && (
        <div>
          <p className="text-md md:text-lg leading-relaxed py-2 pb-16">
            Here's what I'm up to right now:
            <ul className="list-disc pl-6">
              <li>
                Serving as the Event Coordinator at Drexel University, where I organize and manage exciting events to promote AI in Drexel's Campus.
              </li>
              <li>
                Working as an Operational Strategist at Indesearch, I had the privilege of spearheading two impactful events focused on enhancing effective study techniques. These events catered to over 100 underprivileged minority children.
              </li>
              <li>
                Getting ready for my upcoming Co-op experience in the spring and summer quarters, where I'll be diving into the world of real-world work and learning.
              </li>
            </ul>
          </p>
        </div>
      )}

      {/* "Learn More" link to toggle additional content */}
      <p className="text-md md:text-lg leading-relaxed py-4">
        <span className="font-bold">Want to know more about me? </span>
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={toggleShowMore}
        >
          Press this
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
