import "./css/reset.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Test from "./components/Test";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorSet } from "lib/colorSet";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colorSet.background};
`;

const MainContainer = styled.main`
  flex: 1;
`;
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
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>
        <Link to="/test">Test</Link>
      </Nav>
    </HeaderContainer>
  );
};

const FooterContainer = styled.footer.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
  visibility: ${(props) => (props.isHome ? "hidden" : "visible")};
  background-color: ${colorSet.background};

  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = ({}) => {
  const [isHome, setIsHome] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname.replace("/", "") === "");
  }, [location]);
  return (
    <FooterContainer isHome={isHome}>
      <p>Copyright 2024. KIMHAMIN. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/nwewave32">GitHub</a>
        <a href="https://linkedin.com/in/hamin-kim-6379472b1">LinkedIn</a>
      </SocialLinks>
    </FooterContainer>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <AppContainer>
          <Header />
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </MainContainer>
          <Footer />
        </AppContainer>
      </Router>
    </>
  );
};

export default App;
