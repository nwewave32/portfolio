import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorSet } from "lib/colorSet";
import { FlexBox, FullContainer } from "./GlobalStyles";
import { FLATTENABLE_KEYS } from "@babel/types";
import WavyText from "./WavyText";

const HeaderContainer = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 11;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  a,
  a > div {
    text-decoration: none;
    margin: 0 10px;

    color: ${colorSet.base};
  }
`;

const NavContainer = styled(FlexBox)`
  width: 80%;
  position: relative;
  z-index: 10;
`;

const LinkItem = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["isSamePage"].includes(prop),
})`
  font-size: 5em;
  text-decoration: ${(props) => (props.isSamePage ? "underline" : "none")};
`;

const HeaderFullContainer = styled(FlexBox)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 105vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${colorSet.highlight};
`;

const HamburgerContainer = styled.div`
  display: inline-block;
  height: 26px;
  margin-right: 27px;
  position: relative;
`;

const MainNavToggle = styled.a`
  display: block;
  width: 28px;
  height: 16px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  cursor: pointer;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 0;
    border-bottom: 4px solid ${colorSet.base};
    width: 100%;
    left: 0;
    right: 0;
    transition: all ease-out 0.3s;
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
    background-color: ${colorSet.base};
    width: 100%;
    position: absolute;
    top: 50%;
    transition: all ease-out 0.1s;
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

const StyledSVG = styled.svg
  .attrs((props) => ({}))
  .withConfig({
    shouldForwardProp: (prop) => ![].includes(prop),
  })`
  width: 100vw;
  height: 100vh;
  will-change: transform;
  position: absolute;
  top:0px;
  left:0;
  z-index:10;
  opacity:0.5;
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
  {
    title: "test",
    path: "/test",
  },
];

const Header = ({}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredType, setHoveredType] = useState("");
  const toggleMenu = () => setIsActive(!isActive);

  const location = useLocation();

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  const navigate = useNavigate();

  const preventScroll = useCallback(
    (e) => {
      if (isActive) {
        e.preventDefault();
        e.stopPropagation();

        window.scrollTo(0, 0);

        return false;
      }
    },
    [isActive]
  );
  useLayoutEffect(() => {
    window.addEventListener("scroll", preventScroll);
    return () => {
      window.removeEventListener("scroll", preventScroll);
      setIsActive(false);
    };
  }, []);

  const handleMouseEvent = (type) => {
    setIsHovered((prev) => !prev);
    setHoveredType(type);
  };

  return (
    <>
      <HeaderContainer>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="wave.png" width={50} alt="nwewave" />
        </Logo>

        <HamburgerContainer>
          <MainNavToggle
            href="#main-nav"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
            className={isActive ? "active-menu" : ""}
          >
            <i>Menu</i>
          </MainNavToggle>
        </HamburgerContainer>
      </HeaderContainer>
      {isActive && (
        <HeaderFullContainer justify="center" align="center">
          <StyledSVG
            viewBox="0 0 1440 780"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M391.76 206.372C398.561 257.577 422.989 333.816 564.264 307.142C623.961 295.87 672.971 246.349 725.851 192.917C798.112 119.9 877.602 39.5799 1001.47 39.5799C1020.03 39.5799 1045.16 44.9126 1072.57 50.73C1117.77 60.2253 1171.78 75.3692 1217.1 58.8446C1235.02 52.3131 1251.54 29.2773 1269.26 0H1440V757.5C1409.35 752.861 1330.28 742.392 1297.5 780H962.5C1253.14 611 992 438 927 557.5C901.437 604.497 858 780 629.5 780H0V0H234.397C255.086 12.6598 283.808 20.9856 336.62 15.677C379.328 15.677 422.989 38.5147 422.989 81.0731C422.989 99.9999 415.468 116.747 407.713 134.014C398.519 158.147 388.212 179.658 391.76 206.372Z"
              fill="url(#liner-grad-586)"
            ></path>
            <defs>
              <linearGradient
                id="liner-grad-586"
                x1="1374.09"
                y1="454.721"
                x2="24.9217"
                y2="461.887"
                gradientUnits="userSpaceOnUse"
              >
                <stop color="#043F5D"></stop>
                <stop offset="1" color="#022B40"></stop>
              </linearGradient>
            </defs>
          </StyledSVG>
          <Nav>
            <NavContainer direction="column">
              {navArr.map((item) => {
                return (
                  <Link to={item.path} key={item.title}>
                    <LinkItem
                      onMouseEnter={() => handleMouseEvent(item.title)}
                      onMouseLeave={() => handleMouseEvent(item.title)}
                    >
                      <WavyText
                        isSamePage={item.path === location.pathname}
                        text={item.title}
                        isActive={isHovered && hoveredType === item.title}
                      />
                    </LinkItem>
                  </Link>
                );
              })}
            </NavContainer>
          </Nav>
        </HeaderFullContainer>
      )}
    </>
  );
};

export default Header;
