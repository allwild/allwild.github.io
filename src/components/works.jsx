import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

const Works = ({ tileData }) => {
  const [scrollX, setScrollX] = useState(0);
  const scrollContainerRef = useRef(null);
  const dragStartRef = useRef(0);
  const scrollStartRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [hoveredTileIndex, setHoveredTileIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDragStart = (event) => {
    isDraggingRef.current = true;
    dragStartRef.current = getEventX(event);
    scrollStartRef.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.classList.add("dragging");
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    scrollContainerRef.current.classList.remove("dragging");
  };

  const handleMouseDown = (event) => {
    event.preventDefault(); // Prevent text selection during dragging
    handleDragStart(event);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseMove = (event) => {
    if (isDraggingRef.current) {
      const dragDistance = getEventX(event) - dragStartRef.current;
      const newScrollLeft = scrollStartRef.current - dragDistance;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
      setScrollX(newScrollLeft);
    }
  };

  const handleTouchStart = (event) => {
    handleDragStart(event.touches[0]);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const handleTouchMove = (event) => {
    if (isDraggingRef.current) {
      const dragDistance = getEventX(event.touches[0]) - dragStartRef.current;
      const newScrollLeft = scrollStartRef.current - dragDistance;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
      setScrollX(newScrollLeft);
    }
  };

  const getEventX = (event) => {
    if (event.pageX) {
      return event.pageX;
    } else if (event.touches && event.touches[0]) {
      return event.touches[0].pageX;
    }
    return 0;
  };

  const handleScroll = () => {
    setScrollX(scrollContainerRef.current.scrollLeft);
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
        <Link to={`/my_portfolio/${tileData.url}`}>
          <TileImage
            src={tileData.image}
            alt={`Tile ${index + 1}`}
            onDragStart={(e) => e.preventDefault()} // Prevent default dragging behavior
            isHovered={hoveredTileIndex === index}
          />
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
    <Section id="work" onMouseMove={handleMouseMove}>
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
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onScroll={handleScroll}
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
  min-height: 90vh;
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
  z-index: 1;

  /* Scrollbar Styles for Chrome and Safari */
  &::-webkit-scrollbar {
    display: none;
  }

  &.dragging {
    cursor: grabbing;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Tile = styled.div`
  width: 280px;
  height: 450px;
  flex-shrink: 0;

  position: relative;
  overflow: hidden;
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

  font-size: 18px;

  .date {
    font-family: Roboto, sans-serif;
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
