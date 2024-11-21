import { breakpoints } from "lib/globalData";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { FlexBox, StyledImg, WordBubble } from "../GlobalStyles";
import { util } from "lib/util";

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

const BottomSection = ({ isTargetShown }) => {
  const isTablet = util.getWindowType("tabletPortrait");

  return (
    <>
      {isTargetShown && (
        <>
          <Bubble
            isVisible={isTargetShown}
            top={isTablet ? 12 : 15}
            left={isTablet ? 2 : 8}
            time={4}
          >
            <StyledImg imgSrc={`main/&.svg`} alt="logo" height={15} />
          </Bubble>
          <Bubble
            isVisible={isTargetShown}
            top={isTablet ? 28 : 20}
            left={isTablet ? 14 : 20}
            time={3}
          >
            <WordBubble word="we" height={15} />
          </Bubble>
          <Bubble
            isVisible={isTargetShown}
            top={isTablet ? 20 : 17}
            left={isTablet ? 38 : 50}
            time={2.5}
          >
            <WordBubble word="wave" height={15} />
          </Bubble>
        </>
      )}
    </>
  );
};

export default BottomSection;
