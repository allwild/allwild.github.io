import React from "react";
import styled from "styled-components";
import TypingAnimation from "./flashingintro";
import backgroundImage from "../pics/3080769.jpg";

export default function Home({ showSidebar }) {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      const navbarHeight = window.innerHeight * 0.1; // Assuming the navbar height is 10vh
      const contactPosition = contactElement.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset + contactPosition - navbarHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Container className="bright" id="home">
        <TextAnimationContainer className="textanimation">
          <LeftContent>
            <TypingAnimation />
            <ContactButton onClick={scrollToContact}>Hit me up</ContactButton>
          </LeftContent>
        </TextAnimationContainer>
      </Container>
    </>
  );
}

const TextAnimationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 500px;
  padding-left: 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Container = styled.section`
  /* background: linear-gradient(45deg, #14db99d0, #8400ff); */
  background-image: url(${backgroundImage});
  background-position: center center; /* Add this line */
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const ContactButton = styled.button`
  background-color: #8400ff;
  color: #fff;
  width: 150px;
  height: 50px;
  font-family: "Press Start 2P", cursive;
  box-shadow: 3px 2px 0 #14db99;
  margin-top: 40px;
  cursor: pointer;
  border-width: 0.5px;
`;

const LeftContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
}`;
