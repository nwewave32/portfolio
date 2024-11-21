import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorSet } from "lib/colorSet";
import { FlexBox } from "./GlobalStyles";
import WavyText from "./WavyText";
import { breakpoints } from "lib/globalData";
import CustomImg from "./CustomImg";

const Logo = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 101;
  cursor: pointer;
  display: flex;
  align-items: center;
  > img {
    width: 5vh;

    @media (min-width: ${breakpoints.imac}px) {
      width: 6vh;
    }
  }
`;

const HeaderToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 45px;
  z-index: 101;
  border: none;

  @media (min-width: ${breakpoints.imac}px) {
    top: 1.5vw;
    right: 4vw;
  }
`;

const MainNavToggle = styled.a`
  display: block;
  width: 28px;
  height: 16px;
  position: absolute;
  top: 0px;
  left: 0px;

  cursor: pointer;

  @media (min-width: ${breakpoints.imac}px) {
    width: 2.5vw;
    height: 1.5vw;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 0;
    border-bottom: 4px solid ${colorSet.accent};
    width: 100%;
    left: 0;
    right: 0;
    transition: all ease-out 0.3s;

    @media (min-width: ${breakpoints.imac}px) {
      border-bottom: 0.3vw solid ${colorSet.accent};
    }
  }

  &:after {
    top: 100%;
  }

  i {
    display: block;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 4px;
    background-color: ${colorSet.accent};
    width: 100%;
    position: absolute;
    top: 50%;
    transition: all ease-out 0.1s;

    @media (min-width: ${breakpoints.imac}px) {
      height: 0.3vw;
    }
  }

  &.active-menu {
    &:after {
      transform: rotate(-45deg);
      transform-origin: center;
      top: 50%;
    }

    &:before {
      transform: rotate(45deg);
      transform-origin: center;
      top: 50%;
    }

    i {
      opacity: 0;
    }
  }
`;

const FullScreenHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colorSet.neutral};

  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: transform 0.5s ease, opacity 0.5s ease;
  z-index: 100;
`;

const StyledSVG = styled.svg`
  width: 100vw;
  height: 100vh;
  will-change: transform;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 101;
  filter: drop-shadow(4px 5px 3px rgb(0 0 0 / 0.4));
`;

const Nav = styled.nav`
  width: 100%;
  height: 100vh;

  a,
  a > div {
    text-decoration: none;
    margin: 0 10px;

    color: ${colorSet.base};
  }
`;

const NavContainer = styled(FlexBox)`
  padding: 50px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 101;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 20px;
  }
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
`;
const LinkItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isSamePage"].includes(prop),
})`
  text-decoration: ${(props) => (props.isSamePage ? "underline" : "none")};
  width: min-content;
`;

const navArr = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Work",
    path: "/works",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = !isOpen ? "auto" : "hidden";
  }, [isOpen]);

  return (
    <>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <CustomImg imgSrc="wave.png" alt="nwewave" />
      </Logo>
      <HeaderToggleButton onClick={toggleHeader}>
        <MainNavToggle className={isOpen ? "active-menu" : ""}>
          <i>Menu</i>
        </MainNavToggle>
      </HeaderToggleButton>
      <FullScreenHeader isOpen={isOpen}>
        <StyledSVG
          viewBox="0 0 1440 780"
          fill="none"
          preserveAspectRatio={
            window.innerWidth <= breakpoints.tabletPortrait
              ? "xMinYMin slice"
              : "none"
          }
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M391.76 206.372C398.561 257.577 422.989 333.816 564.264 307.142C623.961 295.87 672.971 246.349 725.851 192.917C798.112 119.9 877.602 39.5799 1001.47 39.5799C1020.03 39.5799 1045.16 44.9126 1072.57 50.73C1117.77 60.2253 1171.78 75.3692 1217.1 58.8446C1235.02 52.3131 1251.54 29.2773 1269.26 0H1440V757.5C1409.35 752.861 1330.28 742.392 1297.5 780H962.5C1253.14 611 992 438 927 557.5C901.437 604.497 858 780 629.5 780H0V0H234.397C255.086 12.6598 283.808 20.9856 336.62 15.677C379.328 15.677 422.989 38.5147 422.989 81.0731C422.989 99.9999 415.468 116.747 407.713 134.014C398.519 158.147 388.212 179.658 391.76 206.372Z"
            fill={colorSet.base}
          ></path>
        </StyledSVG>
        <Nav>
          <NavContainer direction="column" justify="space-evenly">
            {navArr.map((item) => {
              return (
                <StyledLink to={item.path} key={item.title}>
                  <LinkItem>
                    <WavyText
                      highlight={item.path === location.pathname}
                      text={item.title}
                    />
                  </LinkItem>
                </StyledLink>
              );
            })}
          </NavContainer>
        </Nav>
      </FullScreenHeader>
    </>
  );
};

export default Header;
