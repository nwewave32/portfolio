import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

import { colorSet, waveColorSet } from "lib/colorSet";
import { FlexBox } from "./GlobalStyles";
import { breakpoints } from "lib/globalData";
import { util } from "lib/util";

const LinkBtn = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  width: max-content;

  flex-wrap: nowrap;
  text-align: center;
  position: relative;

  padding: 10px;

  word-break: keep-all;
  cursor: pointer;
  border: 1px solid ${colorSet.base};
  border-radius: 1.4vh;
  will-change: color;
  color: ${(props) => (props.isHovered ? colorSet.text : colorSet.base)};
  font-weight: 400;
  background-color: transparent;
  overflow: hidden;
  transition: color 1.2s ease-in-out;

  @media (min-width: ${breakpoints.imac}px) {
    padding: 30px;
  }
`;

const BtnWave = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  position: absolute;
  will-change: bottom;
  bottom: ${(props) => (props.isHovered ? "60%" : "-100%")};
  left: 0;
  opacity: 0.4;
  transform: ${(props) =>
    props.isHovered ? "translateX(-50px)" : " translateX(0px)"};
  width: 100%;
  height: 100%;
  transition: bottom 1.2s ease-in-out, transform 5.2s ease-in-out;
  @media (min-width: ${breakpoints.imac}px) {
    bottom: ${(props) => (props.isHovered ? "100%" : "-100%")};
  }
`;

const CustomButton = ({ button, isBlank = true, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredType, setHoveredType] = useState("");
  const isImac = util.getWindowType("imac");
  const handleMouseEvent = (type) => {
    setIsHovered((prev) => !prev);
    setHoveredType(type);
  };

  const handleClick = () => {
    if (onClick) onClick();
    if (isBlank)
      window.open(
        button.url,
        isBlank ? "_blank" : "_self",
        "noopener, noreferrer"
      );
  };

  return (
    <>
      <LinkBtn
        key={button.type}
        onClick={handleClick}
        onMouseEnter={() => handleMouseEvent(button.type)}
        onMouseLeave={() => handleMouseEvent(button.type)}
        isHovered={isHovered && hoveredType === button.type}
      >
        <span>{button.title}</span>

        <BtnWave isHovered={isHovered && hoveredType === button.type}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isImac ? 1000 : 350}
            height={isImac ? 240 : 80}
            viewBox="0 0 3150 200"
          >
            <path
              d="M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z"
              fill={colorSet.accent}
            ></path>
          </svg>
        </BtnWave>
      </LinkBtn>
    </>
  );
};

export default CustomButton;
