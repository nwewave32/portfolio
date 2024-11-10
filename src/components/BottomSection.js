import { breakpoints } from "lib/globalData";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { FlexBox } from "./GlobalStyles";
import { colorSet, waveColorSet } from "lib/colorSet";

const floatUp = (top) => keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: calc(100% - 20vh - ${top}%);
    opacity: 1;
  }
`;

const hovering = (time) => keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-${10 + time}px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Bubble = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["isVisible", "left"].includes(prop),
})`
  width: max-content;
  padding: 30px;
  border-radius: 50%;

  position: absolute;
  left: ${({ left }) => left}%;
  z-index: 10;
  opacity: 0;

  ${({ isVisible, top, time }) =>
    isVisible &&
    css`
      animation: ${floatUp(top)} 3s ease-in forwards,
        ${hovering(time)} ${time}s ease-in-out infinite 3s;
    `}
`;

const StyledImg = styled.img.attrs(() => ({}))`
  height: 15vh;
  display: block;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    height: 10vw;
  }

  /* Tablet - Portrait 이상 */
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    height: 10vw;
  }
`;

const BottomSection = ({ isTargetShown }) => {
  return (
    <>
      {isTargetShown && (
        <>
          <Bubble isVisible={isTargetShown} top={15} left={10} time={4}>
            <StyledImg src="main/n.svg" alt="logo" />
          </Bubble>
          <Bubble isVisible={isTargetShown} top={20} left={25} time={3}>
            <StyledImg src="main/w.svg" alt="logo" />
            <StyledImg src="main/e.svg" alt="logo" />
          </Bubble>
          <Bubble isVisible={isTargetShown} top={17} left={50} time={2.5}>
            <StyledImg src="main/w.svg" alt="logo" />
            <StyledImg src="main/a.svg" alt="logo" />
            <StyledImg src="main/v.svg" alt="logo" />
            <StyledImg src="main/e.svg" alt="logo" />
          </Bubble>
        </>
      )}
    </>
  );
};

export default BottomSection;
