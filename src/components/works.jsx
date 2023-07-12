import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";



const Works = ({ tileData }) => {
  const [hoveredTileIndex, setHoveredTileIndex] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTouchStart = (event) => {
    const touchX = event.touches[0].clientX;
    setTouchStartX(touchX);
    setScrollStartX(scrollX);
  };

  const handleTouchMove = (event) => {
    const touchX = event.touches[0].clientX;
    const dragDistance = touchX - touchStartX;
    const newScrollX = scrollStartX - dragDistance;
    setScrollX(newScrollX);
  };


  const handleTileHover = (index) => {
    if (!isAnimating) {
      setHoveredTileIndex(index);
      setIsAnimating(true);
    }
  };

  const handleTileUnhover = () => {
    setHoveredTileIndex(null);
    setIsAnimating(false);
  };
    


  const renderTiles = () => {
    return tileData.map((tileData, index) => (
      <Tile
        key={index}
        onMouseEnter={() => handleTileHover(index)}
        onMouseLeave={handleTileUnhover}
      >
        <Link to={`/${tileData.url}`}>
          <TileImage 
          src={tileData.image} 
          alt={`Tile ${index + 1}`}
          isHovered={hoveredTileIndex === index} />
          {hoveredTileIndex === index && (
            <TileTitle>
              <span>{tileData.title}</span>
              <span className="date">{tileData.date}</span>
            </TileTitle>
          )}
        </Link>
      </Tile>
    ));
  };

  return (
    <Section id="work">
      <TitleContainer>
        <h1>Work</h1>
        <h2>Explore my creative realm</h2>
        <br />
        <p>
          In this section, you will find a collection of projects that showcase
          my skills and experience.
          <br />
          <br />
          Each project represents a unique challenge and demonstrates my ability
          to create functional and visually appealing web applications. Take a
          closer look at the projects below to get a glimpse of my capabilities
          and the creative solutions I've implemented.
        </p>
      </TitleContainer>

      <CustomScrollContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {renderTiles()}
      </CustomScrollContainer>
    </Section>
  );
};

const AnimateTile = keyframes`
  0% {
    transform: scale(1);
    filter: blur(0);
  }
  100% {
    transform: scale(1.1);
    filter: blur(5px);
  }
`;

const UnAnimateTile = keyframes`
  0% {
    transform: scale(1.1);
    filter: blur(5px);
  }
  100% {
    transform: scale(1);
    filter: blur(0);
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #000;
  gap: 100px;
  min-height: calc(100vh - 80px);
  padding: 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleContainer = styled.div`
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;

  h1 {
    font-family: "Press Start 2P", cursive;
    margin-top: 0;
    color: #8400ff;
    text-shadow: 2px 2px 0 #14db99;

    @media (max-width: 768px) {
      margin: 20px 0;
    }
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;

const CustomScrollContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
  z-index: 1;
  touch-action: pan-x; /* Allow vertical scrolling on touch devices */
  transition: transform 0.3s ease-out; /* Add a transition for smooth scrolling */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TileTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-family: "Press Start 2P", cursive;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  font-size: 18px;

  .date {
    font-family: Roboto, sans-serif;
  }
`;

const Tile = styled.div`
  width: 280px;
  height: 450px;
  flex-shrink: 0;

  position: relative;
  overflow: hidden;
  scroll-snap-align: start; /* Add scroll snapping behavior */

  &:hover {
    ${TileTitle} {
      opacity: 1;
    }
  }
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${({ isHovered }) =>
    isHovered ? css`${AnimateTile} 0.6s forwards` : css`${UnAnimateTile} 0.6s forwards`};
`;

export default Works;
