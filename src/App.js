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
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  flex: 1;
`;
const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
  background-color: ${(props) =>
    props.isHome ? "rgba(255,255,255,0.4)" : "#282c34"};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.isHome ? "rgba(0,0,0,0.4)" : "#fff")};
  position: sticky;
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
    color: ${(props) => (props.isHome ? "rgba(0,0,0,0.4)" : "#fff")};
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
      </Nav>
    </HeaderContainer>
  );
};

const FooterContainer = styled.footer.withConfig({
  shouldForwardProp: (prop) => !["isHome"].includes(prop),
})`
visibility: ${(props) => (props.isHome ? "hidden" : "visible")}
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    color: #61dafb;
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
            </Routes>
          </MainContainer>
          <Footer />
        </AppContainer>
      </Router>
    </>
  );
};

export default App;