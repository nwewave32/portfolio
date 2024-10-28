import "./css/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Contact from "./components/Contact";
import Test from "./components/Test";
import styled from "styled-components";

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
              <Route path="/works" element={<Projects />} />

              <Route path="/contact" element={<Contact scrollPer={0} />} />
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
