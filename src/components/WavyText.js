import { colorSet } from "lib/colorSet";
import React, { useEffect, useState } from "react";
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
  min-width: ${({ fontSize }) => fontSize}vh;
`;

const Container = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) =>
    !["highlight", "color", "fontSize"].includes(prop),
})`
  margin-bottom: 2rem;
  color: ${({ color }) => color};
  border-bottom: ${(props) => (props.highlight ? "2px solid" : "none")};
  padding-bottom: 1px;
  box-sizing: border-box;
  font-size: ${({ fontSize }) => fontSize}vh;
  line-height: 1;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 7vh;
  }
`;

const WavyText = ({
  text,
  highlight = false,
  color = colorSet.background,
  fontSize = 10,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const animatedText = text.split("").map((letter, index) => (
    <WavyLetter key={index} delay={index * 0.06}>
      {letter}
    </WavyLetter>
  ));

  const handleMouseEvent = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <Container
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      highlight={highlight}
      color={color}
      fontSize={fontSize}
    >
      {isHovered ? animatedText : text}
    </Container>
  );
};

export default WavyText;
