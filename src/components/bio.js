import React, { useState, useEffect } from "react";

const Bios = () => {
  const allTexts = [
    "I am Arijit Chakma.",
    "I am a sophomore at Drexel University majoring in CS and a minor in Math.",
    "I am an aspiring software engineer.",
    "I am a machine learning enthusiast.",
    "I am an average food enjoyer, dog lover."
  ];

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
    <div className="py-8 md:py-32 md:px-20 lg:py-52">
      <p className="text-2xl md:text-3xl lg:text-5xl">
        Hello, {text}
      </p>
    </div>
  );
};

export default Bios;
