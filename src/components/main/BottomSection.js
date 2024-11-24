import { breakpoints } from "lib/globalData";
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { FlexBox, StyledImg, WordBubble } from "../GlobalStyles";
import { util } from "lib/util";
import CustomImg from "components/CustomImg";

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
const scrollAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ContactArrow = styled.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div`
  opacity: 1;
  animation: ${scrollAnimation} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const ArrowImg = styled(CustomImg)`
  transform: rotate(90deg);
  width: 3vh;
  filter: invert(60%);
  margin-top: -5px;
`;

const BottomImg = styled(CustomImg)`
  position: absolute;
  bottom: 0;
  right: 0;
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
      <ContactArrow>
        {Array.from({ length: 3 }, (_, idx) => (
          <Arrow key={idx}>
            <ArrowImg imgSrc="next.png" alt="keep_scroll" />
          </Arrow>
        ))}
      </ContactArrow>
      <BottomImg imgSrc="main/bottom.svg" alt="bottom_" width="100%" />
    </>
  );
};

export default BottomSection;
