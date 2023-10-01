import React from "react";
import resume from '../images/ArijitChakmaResume.pdf';

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "ArijitChakmaResume.pdf";
    link.click();
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-full"
        style={{ transition: "background-color 0.3s" }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default DownloadResume;
