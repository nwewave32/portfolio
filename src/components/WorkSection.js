import { breakpoints, projectsData } from "lib/globalData";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

import { colorSet, waveColorSet } from "lib/colorSet";
import {
  FlexBox,
  FullContainer,
  WavyText,
  StyledSpan,
  StyledSvg,
} from "./GlobalStyles";
import WavySeparator from "./WavySeparator";
import InfiniteAutoSlider from "./InfiniteAutoSlider";

const Column = styled.div`
  width: ${({ width }) => width}px;
  padding: 0px 20px;
`;

const WorkSection = ({ isTargetShown, scroll }) => {
  const isMobile = window.innerWidth <= breakpoints.mobile;
  const getHeight = () => {
    if (isMobile) return 250;
    else return Math.max(Math.floor(window.innerHeight / 4), 300);
  };
  const HEIGHT = getHeight();
  return (
    <>
      <FullContainer justify="start">
        <WavySeparator mainColor={waveColorSet.layer4} />
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3440 300">
          <path
            d="M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z"
            stroke="black"
            stroke-width="2"
            fill="none"
          ></path>
        </svg> */}
        <Column width={HEIGHT}>
          <InfiniteAutoSlider
            projects={projectsData}
            isUp={true}
            clickProject={() => {}}
            columnIndex={0}
            height={HEIGHT}
          />
        </Column>
      </FullContainer>
    </>
  );
};

export default WorkSection;
