import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Sidebar from "./sidebar";



export default function Header({ showSidebar = false, setShowSidebar }) {
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowMenuIcon(screenWidth < 768);
      if (screenWidth > 768) {
        setShowSidebar(null);
      }
    };

    handleResize(); // Check initial screen width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    let targetId;

    if (event.target.hasAttribute("href")) {
      targetId = event.target.getAttribute("href").slice(1);
    } else {
      targetId = event.target.classList[0];
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      handleMenuClick();
    }
  };

  const handleLogoClick = () => {
    if (showSidebar !== null) {
      setShowSidebar(null);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <NavWrapper>
      <Nav>
        <Logo src={require("../pics/Group1.png")} onClick={handleLogoClick} />
        {showMenuIcon ? (
          <>
            <MenuIcon onClick={handleMenuClick}>
              <MenuLineTop show={showSidebar} />
              <MenuLineMiddle show={showSidebar} />
              <MenuLineBottom show={showSidebar} />
            </MenuIcon>
            {(showSidebar || showSidebar === null) && (
              <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                handleNavLinkClick={handleNavLinkClick}
              />
            )}
          </>
        ) : (
          <List>
            <li>
              <a href="#about" onClick={handleNavLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#work" onClick={handleNavLinkClick}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </List>
        )}
      </Nav>
    </NavWrapper>
  );
}


const NavWrapper = styled.div`
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;`

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  color: #e8e8e8;
  padding: 0 2rem;
  height: 80px;
  width: 100%;
`

const Logo = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;


const List = styled.ul`
  display: flex;
  justify-content: space-between;
  font-family: "Press Start 2P", cursive;
  color: #fff;
  
  gap: 20px;

  li {
    cursor: pointer;
    transition: color 0.2s;
    list-style: none;

    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      color: #8400ff;
      text-shadow: 1px 1px 0 #14db99;
      
    }

    &:active {
      transform: translate(3px, 2px);
    }
  }
}`;


const bottomLineAnimation = keyframes`
  0% {
    transform: rotate(0) translateY(0);
  }
  100% {
    transform: rotate(-45deg) translateY(-12px);
  }
`;

const bottomLineAnimationReverse = keyframes`
0% {
  transform: rotate(-45deg) translateY(-12px);
}
100% {
  transform: rotate(0) translateY(0);
}
`;

const topLineAnimationReverse = keyframes`
0% {
  transform: rotate(45deg) translateY(11px);
}
100% {
  transform: rotate(0) translateY(0);
}
`;

const topLineAnimation = keyframes`
  0% {
    transform: rotate(0) translateY(0);
  }
  100% {
    transform: rotate(45deg) translateY(11px);
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #fff;
`;

const MenuLineTop = styled(MenuLine)`
  ${({ show }) => {
    if (show) {
      return css`
        animation: ${topLineAnimation} 0.2s forwards;
      `;
    } else if (!show && show !== null) {
      return css`
        animation: ${topLineAnimationReverse} 0.2s forwards;
      `;
    } else {
      return "";
    }
  }}
`;

const MenuLineMiddle = styled(MenuLine)`
  opacity: ${({ show }) => (show ? "0" : "1")};
`;

const MenuLineBottom = styled(MenuLine)`
  ${({ show }) =>
    show
      ? css`
          animation: ${bottomLineAnimation} 0.2s forwards;
        `
      : show !== null
      ? css`
          animation: ${bottomLineAnimationReverse} 0.2s forwards;
        `
      : ""};
`;