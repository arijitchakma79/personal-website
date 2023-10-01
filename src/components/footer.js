import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ isDarkMode }) => {
  // Define color classes based on dark mode
  const iconColorClass = isDarkMode ? 'text-white hover:text-gray-500' : 'text-gray-900 hover:text-gray-500';
  const footerClasses = isDarkMode
    ? 'bg-gray-800 text-white py-6'
    : 'bg-white text-gray-900 py-6';

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://github.com/arijitchakma79"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className={iconColorClass}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arijit-chakma-906a59240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className={iconColorClass}
            />
          </a>
          <a
            href="https://www.facebook.com/arijit.chakma.56?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className={iconColorClass}
            />
          </a>
          <a
            href="https://www.instagram.com/80asfluffshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className={iconColorClass}
            />
          </a>
          
          <a
            href="https://drexel-ai.slack.com/team/U044C1G19V4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faSlack}
              size="lg"
              className={iconColorClass}
            />
          </a>
        </div>
        <p className="text-sm">
          Created by Arijit Chakma &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;