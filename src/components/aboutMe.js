import React, { useState } from 'react';
import clubData from '../personalDatas.json'

const AboutMe = ({ isDarkMode }) => {
  // Define styles based on dark mode
  const textStyle = {
    fontFamily: "'Quicksand', sans-serif",
    color: isDarkMode ? 'white' : 'black',
  };

  

  const [showMore, setShowMore] = useState(false);

  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`w-4/5 sm:w-100 mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white text-gray-900'}`} style={textStyle}>
      <h1 className="text-2xl md:text-4xl lg:text-4xl">Hey there!</h1>
      <p className="text-md md:text-lg leading-relaxed py-4">
        My name is {clubData.main.name}. Despite my initial lack of coding experience, I quickly found myself drawn to the world of computer science, and I've since become passionate about various aspects,
        including Software Engineering, AI/ML, and Data Science. Eventually, I plan to make AI-Powered Software in the industry or indulge in AI-related research in order to make meaningful impact near on my surrounding.
      </p>
      {showMore && (
        <div>
          <p className="text-md md:text-lg leading-relaxed py-4">
            What sets me apart is not just my academic and career pursuits, but also my vision for the future. I am on a mission to make a positive impact, especially within my Chakma community. Hailing from the Chittagong
            Hill Tracts of Bangladesh, the Chakma community is often underrepresented in many aspects including tech. I envision of creating a organization that promotes collaboration and empowerment on technology among the
            Chakma youths.
          </p>
          <p className="text-md md:text-lg leading-relaxed py-4">
            Want to know about Chakmas? <a href='https://en.wikipedia.org/wiki/Chakma_people' className='text-blue-500 cursor-pointer hover:underline'>Visit this link</a>
          </p>

          <p className="text-md md:text-lg leading-relaxed py-2 pb-6">
            Currently, I am :
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

          <p className="text-md md:text-lg leading-relaxed py-2 pb-8">
            Interesting facts:
            <ul className="list-disc pl-6">
              <li>
                I love Football (Soccer) and I'm a huge fan of the Spanish Club Real Madrid FC and Cristiano Ronaldo :)
              </li>
              <li>
                During high school, I founded a non-profit organization aimed at addressing food disparities in my community. Through this initiative,
                I organized and successfully conducted three workshops, reaching out to over 150 rural residents. These workshops were designed to create awareness
                and provide solutions to the pressing issue of food inequality.
              </li>
              <li>
                I am deeply passionate about raising awareness for Thalassemia and committed to working on initiatives in the future.
                If you share the same interest and would like to collaborate or connect, please feel free to reach out.
              </li>
            </ul>
          </p>
          
        </div>
      )}

      {/* "Learn More" link to toggle additional content */}
      <p className="text-md md:text-lg leading-relaxed py-4">
        <span className="font-bold">Want to know {showMore ? 'less' : 'more'} about me? </span>
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
