import { colorSet } from "lib/colorSet";
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FlexBox } from "./GlobalStyles";
import { breakpoints } from "lib/globalData";

const wavyAnimation = keyframes`
  0% {
    top: 0px;
  }
  50% {
    top: -15px;
  }
  100% {
    top: 0px;
  }
`;

const WavyLetter = styled.span
  .attrs((props) => ({
    style: {
      animationDelay: ` ${props.delay}s`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["delay"].includes(prop),
  })`
  position: relative;
  display: inline-block;
  animation: ${wavyAnimation} 1.3s ease infinite;
  
`;

const Container = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["isSamePage"].includes(prop),
})`
  margin-bottom: 2rem;
  color: ${colorSet.background};
  border-bottom: ${(props) => (props.isSamePage ? "2px solid" : "none")};
  padding-bottom: 1px;
  box-sizing: border-box;
  font-size: 10vh;
  line-height: 1;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 7vh;
  }
`;

const WavyText = ({ text, isActive, isSamePage }) => {
  const animatedText = text.split("").map((letter, index) => (
    <WavyLetter key={index} delay={index * 0.06}>
      {letter}
    </WavyLetter>
  ));

  return (
    <Container isSamePage={isSamePage}>
      {isActive ? animatedText : text}
    </Container>
  );
};

export default WavyText;
