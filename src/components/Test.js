import React, { useEffect, useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import { colorSet } from "lib/colorSet";
import { FlexBox } from "./GlobalStyles";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: rgba(50, 147, 250, 0.6);
  box-sizing: border-box;
`;

const popping = keyframes`
  from {
  opacity:1;
  transform: translateZ(0) scale(1,1);
  }
  to{
  opacity:0;
  transform: translateZ(0) scale(1.75,1.75);
  }
`;

const Bubble = styled.div`
  display: inline-block;
  width: 300px;
  color: black;
  height: 300px;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
  background: radial-gradient(
    circle at 50% 55%,
    rgba(240, 245, 255, 0.9),
    rgba(240, 245, 255, 0.9) 40%,
    rgba(225, 238, 255, 0.8) 60%,
    rgba(43, 130, 255, 0.4)
  );

  &:before {
    content: "";
    display: inline-block;
    padding-top: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 6%;
    left: 9%;
    width: 100%;
    height: 100%;
    border-radius: 100%;

    -webkit-filter: blur(1px);
    z-index: 2;
    -webkit-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg);
    display: block;
    background: radial-gradient(
      circle at 50% 80%,
      rgba(255, 255, 255, 0) 74%,
      white 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:hover {
    animation: ${popping} 0.5s cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards;
  }
`;

const Test = () => {
  return (
    <Container>
      <Bubble></Bubble>
    </Container>
  );
};

export default Test;
