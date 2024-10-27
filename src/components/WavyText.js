import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animation for each letter
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
    shouldForwardProp: (prop) => !["windowWidth", "scrollY"].includes(prop),
  })`
  position: relative;
  display: inline-block;
  animation: ${wavyAnimation} 1.3s ease infinite;
  
`;

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isSamePage"].includes(prop),
})`
  margin-bottom: 2rem;

  border-bottom: ${(props) => (props.isSamePage ? "2px solid" : "none")};
  padding-bottom: 1px;
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
