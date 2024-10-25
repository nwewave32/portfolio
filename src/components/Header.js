import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorSet } from "lib/colorSet";

const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.isHome ? colorSet.base : "transparent"};
  position: fixed;
  top: 0;
  z-index: 50;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
  a {
    text-decoration: none;
    margin: 0 10px;
    font-size: 1rem;
    color: ${(props) => (props.isHome ? colorSet.highlight : colorSet.base)};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = ({}) => {
  const [isHome, setIsHome] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname.replace("/", "") === "");
  }, [location]);
  const navigate = useNavigate();
  return (
    <HeaderContainer isHome={isHome}>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="wave.png" width={50} alt="nwewave" />
      </Logo>

      <Nav isHome={isHome}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Work</Link>

        <Link to="/contact">Contact</Link>
        <Link to="/test">Test</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
