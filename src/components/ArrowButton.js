import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

import { colorSet } from "lib/colorSet";
import { breakpoints } from "lib/globalData";
import CustomImg from "./CustomImg";

const transition = ({ type, isHovered }) => {
  if (type === "prev") {
    return `left: ${
      isHovered ? 0 : 100
    }%; transition: left 1.5s; padding-right: 100%;`;
  } else
    return `right: ${
      isHovered ? 0 : 100
    }%; transition: right 1.5s; padding-left: 100%;`;
};

const StyledButton = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isHovered", "type"].includes(prop),
})`
  position: relative;

  font-size: 3vh;
  color: ${({ isHovered }) => (isHovered ? "transparent" : colorSet.highlight)};
  overflow: hidden;
  text-align: ${({ type }) => (type === "next" ? "right" : "left")};
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 2vh;
  }
  > div {
    display: inline;
    height: 3.2vh;

    background-color: ${colorSet.background};
    position: absolute;
    top: 50%;
    ${transition}
    transform: translate(0%, -50%);
    > img {
      height: 3vh;
      filter: invert(79%) sepia(44%) saturate(265%) hue-rotate(124deg)
        brightness(87%) contrast(89%);
    }
  }
`;

const ArrowButton = ({ text, type, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEvent = () => {
    setIsHovered((prev) => !prev);
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <StyledButton
        onClick={handleClick}
        onMouseEnter={() => handleMouseEvent(type)}
        onMouseLeave={() => handleMouseEvent(type)}
        isHovered={isHovered}
        type={type}
      >
        {text}
        <div>
          <CustomImg imgSrc={`${type}.png`} alt={type} />
        </div>
      </StyledButton>
    </>
  );
};

export default ArrowButton;
