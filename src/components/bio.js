import React, { useState, useEffect } from "react";
import clubData from '../personalDatas.json';

const Bios = () => {
  const allTexts = clubData.main.descriptions;

  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentIndex] = useState(0);
  const fullText = allTexts[currentTextIndex];
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let charIndex = isReversing ? fullText.length - 1 : 0;

    const typeCharacter = () => {
      if (!isMounted) return;

      if (isReversing) {
        if (charIndex > 0) {
          setText((prevText) => prevText.slice(0, -1));
          charIndex--;
          setTimeout(typeCharacter, 50);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % allTexts.length);
          setIsReversing(false); // Reset to typing forward
        }
      } else {
        if (charIndex < fullText.length) {
          setText((prevText) => prevText + fullText.charAt(charIndex));
          charIndex++;
          setTimeout(typeCharacter, 50);
        } else {
          setTimeout(() => {
            setIsReversing(true);
          }, 1000);
        }
      }
    };

    typeCharacter();

    return () => {
      isMounted = false;
    };
  }, [currentTextIndex, isReversing]);

  return (
    <div className="py-8 px-8 md:py-32 md:px-20 lg:py-52">
      <p className="text-2xl md:text-3xl lg:text-5xl ">
        Hello, {text}
      </p>
    </div>
  );
};

export default Bios;
