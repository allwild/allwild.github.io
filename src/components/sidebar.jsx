import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Sidebar({ showSidebar, handleNavLinkClick }) {
  
  return (
    <Container showSidebar={showSidebar}>
      <List>
        <ListItem className="about li_about">
          <Link to="/">
            <a href="#about" onClick={handleNavLinkClick}>
              About
            </a>
          </Link>
        </ListItem>
        <ListItem>
          <a href="#work" onClick={handleNavLinkClick}>
            Work
          </a>
        </ListItem>
        <ListItem className="li_contact">
          <a href="#contact" onClick={handleNavLinkClick}>
            Contact
          </a>  
        </ListItem>
      </List>
    </Container>
  );
}


const slideIn = keyframes`
  from {
    transform: translateY(-150px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-150px);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transform: translateX(-150px);
  ${({ showSidebar }) =>
    showSidebar
      ? css`
          animation: ${slideIn} 0.3s ease-in-out forwards;
        `
      : (!showSidebar && showSidebar!== null) 
      ? css`
          animation: ${slideOut} 0.3s ease-in-out forwards;
        `
      : null};
  z-index: -1;
`;

const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 0;

  .li_about {
    border-bottom: none;  
  }
  
  .li_contact {
    border-top: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  font-family: "Press Start 2P", cursive;
  color: #fff;
  background-color: #8400ff;
  text-shadow: 3px 2px 0 #8400ff;
  border-width: 0.5px 0;
  border-style: solid;
  border-color: #14db99;
  list-style: none;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #14db99;
    
  }
`;
