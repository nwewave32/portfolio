import { colorSet } from "lib/colorSet";
import { breakpoints } from "lib/globalData";
import { util } from "lib/util";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const WaveContainer = styled.div`
  position: absolute;
  bottom: -2%;
  width: 100vw;
  height: 300px;
  overflow: hidden;

  @media (min-width: ${breakpoints.imac}px) {
    height: 900px;
  }
`;

const WaveSVG = styled.svg
  .attrs(({ px }) => ({
    style: {
      transform: `translate3d(${px}px, 0px, 0px) `,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["px"].includes(prop),
  })`
  width: auto;
  height: 300px;
  will-change: transform;

      @media (min-width: ${breakpoints.imac}px) {
    height: 900px;
  }
`;

const BackSVG = styled(WaveSVG)`
  position: absolute;
  top: -35px;
`;

const MainSVG = styled(WaveSVG)``;

const WavySeparator = ({
  mainColor = colorSet.background,
  backColor = colorSet.accent,
}) => {
  const seperatorRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const isImac = util.getWindowType("imac");
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getPx = (pace) => {
    const windowWidth = window.innerWidth;
    const result = -(isImac ? 3440 * 3 : 3440) + windowWidth + scrollY * pace;
    return Math.min(0, result);
  };

  return (
    <WaveContainer ref={seperatorRef}>
      <BackSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3440 300"
        px={getPx(0.4)}
      >
        <path
          d="M-196.61 0V21.1232C-196.61 90.5281 -148.913 67.6768 -101.5 115.09C-14.9999 201.59 116.787 115.09 227.697 115.09C338.606 115.09 400.788 152.442 511.698 152.442C622.607 152.442 676.557 122.132 795.699 115.09C908.436 108.426 966.566 155.325 1079.7 155.325C1192.83 155.325 1252.79 115.09 1363.7 115.09C1474.61 115.09 1534.57 155.325 1647.7 155.325C1760.84 155.325 1820.79 115.09 1931.7 115.09C2042.61 115.09 2102.57 155.325 2215.7 155.325C2328.84 155.325 2386.57 115.09 2499.7 115.09C2612.84 115.09 2672.8 155.325 2783.71 155.325C2894.61 155.325 2954.57 115.09 3067.71 115.09C3180.84 115.09 3238.57 155.325 3351.71 155.325C3464.84 155.325 3524.8 115.09 3635.71 115.09C3746.62 115.09 3845.02 185.125 3919.71 125.325C3976.61 79.7659 3919.71 0 3919.71 0H5000V1000H-196.61Z"
          fill={backColor}
        ></path>
      </BackSVG>

      <MainSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3440 300"
        preserveAspectRatio="none"
        px={getPx(0.6)}
      >
        <path
          d="M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z"
          fill={mainColor}
        ></path>
      </MainSVG>
    </WaveContainer>
  );
};

export default WavySeparator;
