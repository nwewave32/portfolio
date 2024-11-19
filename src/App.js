import "./css/reset.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "screen/Home";
import AboutMe from "screen/AboutMe";
import Projects from "screen/Projects";
import Footer from "components/Footer";
import Header from "components/Header";

import Contact from "screen/Contact";
import Test from "screen/Test";
import styled from "styled-components";

import { colorSet } from "lib/colorSet";
import { breakpoints } from "lib/globalData";
// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: ${colorSet.background};
// `;

const MainContainer = styled.main`
  flex: 1;
`;

// 컨테이너 스타일 정의
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colorSet.background};

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
  }

  /* Tablet - Portrait 이상 */
  @media (min-width: ${breakpoints.mobile}px) {
  }

  /* Tablet - Landscape 이상 */
  @media (min-width: ${breakpoints.tabletPortrait}px) {
  }

  /* Laptop 이상 */
  @media (min-width: ${breakpoints.tabletLandscape}px) {
  }

  /* Desktop 이상 */
  @media (min-width: ${breakpoints.laptop}px) {
  }

  /* imac 이상 */
  @media (min-width: ${breakpoints.imac}px) {
  }
`;

const FixedWidth = styled.div`
  position: fixed;
  top: 0;
  left: ${({ pos }) => pos}%;
  height: 100px;
  width: 1px;
  border-right: 2px solid red;
  z-index: 999;
`;
const App = () => {
  return (
    <>
      <Router>
        <AppContainer>
          <Header />
          <MainContainer>
            {/* {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((item) => (
              <FixedWidth pos={item}>
                {item},{(window.innerWidth * item) / 100}
              </FixedWidth>
            ))} */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/works" element={<Projects />} />

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
