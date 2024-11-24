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

const MainContainer = styled.main`
  flex: 1;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colorSet.background};
`;

const ErrorScreen = () => {
  return (
    <>
      <AppContainer>
        <div>Error!</div>
        <div>404!</div>
        <div>Error!</div>
      </AppContainer>
    </>
  );
};

export default ErrorScreen;
