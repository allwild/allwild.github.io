import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SinglePage({ details }) {

  const dynamicURL = details.deployed;
  const dynamicGitURL = details.github;

  useEffect(() => {
    const dynamicLink = document.getElementById("dynamicLink");
    const dynamicGitLink = document.getElementById("dynamicGitLink");
    dynamicLink.setAttribute("href", dynamicURL);
    dynamicGitLink.setAttribute("href", dynamicGitURL);
  }, [dynamicURL , dynamicGitURL]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5);
    return () => clearTimeout(timeout);
  }, [details]);

  return (
    <Container img={details.image}>
      <Link to="/" className="link">
        <Exit className="material-symbols-outlined">keyboard_backspace</Exit>
        Go back
      </Link>
      <DetailsWrapper>
        <TextBox>
          <p><i>{details.date}</i></p>
          <Title>{details.title}</Title>
          <Description>{details.description}</Description>
        </TextBox>
        {/* <Image src={details.image} alt={details.title} /> */}
        <hr />
        <ButtonWrapper>
          <Button>
            <a id="dynamicLink" href="" target="_blank">To Site</a>
          </Button>
          <Button>
            <a id="dynamicGitLink" href="" target="_blank">
              <i className="fa-brands fa-github fa-xl"></i>
              Github
            </a>
          </Button>
        </ButtonWrapper>
      </DetailsWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  display: flex;
  gap: 100px;
  flex-direction: column;
  padding: 20px;
  margin-top: 10vh;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 1)
  ),
  url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;

  .link {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 20px;
  }

  /* Scroll to the top when the component mounts */
  overflow-y: auto;
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    gap: 0px;
    height: auto;
    justify-content: flex-start;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-family: "Press Start 2P", cursive;
`;

const Exit = styled.span`
  font-size: 40px;
  color: #fff;
`;

const Description = styled.p`
  color: #fff;
  white-space: pre-wrap;
`;

const Image = styled.img`
  width: 50%;
`;

const TextBox = styled.div`
  color: #fff;
  padding: 20px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #8400ff;
  color: #fff;
  width: 150px;
  height: 50px;
  font-family: "Press Start 2P", cursive;
  box-shadow: 3px 2px 0 #14db99;
  margin-top: 40px;
  cursor: pointer;
  border-width: 0.5px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
`;
