import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const introText = `Hello!\nMy name is Almos.\n I am a web developer.`;
    const alteringText = `problem solver.`;

    const typeText = (currentText, currentIndex) => {
      if (currentIndex === introText.length) {
        setTimeout(() => {
          let newText = currentText;
          let iterations = 14;
          
        
          const deleteLetter = () => {
            newText = newText.slice(0, -1);
            setText(newText);
          
            iterations--;
            if (iterations > 0) {
              setTimeout(deleteLetter, 100);
            } else {
              setIsTyping(false); // Move the setIsTyping(false) here
              setTimeout(addLetter, 2000);
            }
          };

          const addLetter = () => {
            let index = 0;
            const addNextLetter = () => {
              if (index === alteringText.length) {
                setIsTyping(false);
                return;
              }
              newText += alteringText[index];
              setText(newText);
              index++;

              setTimeout(addNextLetter, 70);
            };

            setIsTyping(true);
            addNextLetter();
          }
        
          deleteLetter();   
          
        }, 2000);

        setIsTyping(false);
        return;
      }

      if (currentIndex === 7) { // 7 is the length of "Hello, "
        setIsTyping(false);
        setTimeout(() => {
          currentText += introText[currentIndex];
          typeText(currentText, currentIndex + 1);
        }, 2000); // Pause for 2 seconds before continuing
        return;
      }

      setIsTyping(true);
      const nextText = currentText + introText[currentIndex];
      setText(nextText);

      setTimeout(() => {
        typeText(nextText, currentIndex + 1);
      }, 70); // Delay between each character typing
    };

    setTimeout(() => {
      typeText("", 0);
    }, 2000); // Delay before starting to type

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <Container>
      <Text>
        {text}
        <Cursor blinking={isTyping}>|</Cursor>
      </Text>
    </Container>
  );
};

const Container = styled.div`
    height: 236px;
 `;

const Text = styled.div`
  font-size: 17px;
  font-family: "Press Start 2P", cursive;
  color: #fff;
  white-space: pre-line; /* Preserve line breaks */
  line-height: 76px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const blinkAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Cursor = styled.span`
  position: relative;
  top: 7px;
  left: -10px;
  font-size: 34px;
  color: white;
  animation: ${({ blinking }) =>
    blinking
      ? 'none'
      : css`
          ${blinkAnimation} 0.8s step-end infinite
        `};
`;

export default TypingAnimation;
