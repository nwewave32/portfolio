import React, { useEffect, useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import { colorSet, waveColorSet } from "lib/colorSet";
import { FlexBox, WavyText } from "../GlobalStyles";
import { breakpoints } from "lib/globalData";
import { util } from "lib/util";

const FixedWave = styled.div.withConfig({
  shouldForwardProp: (prop) => !["waveTop", "pace"].includes(prop),
})`
  position: absolute;
  top: -400px;
  left: 0;

  transform: perspective(1200px);

  z-index: 10;
  @media (min-width: ${breakpoints.imac}px) {
    top: -800px;
  }
`;

const StyledSVG = styled.svg`
  width: 6000px;
  height: 400px;
  filter: drop-shadow(-4px -5px -3px rgb(0 0 0 / 0.4));
  @media (min-width: ${breakpoints.imac}px) {
    width: 12000px;
    height: 800px;
  }
`;

const DynamicWave = styled.path
  .attrs(({ wavePace }) => ({
    style: {
      transform: `translateX(-${wavePace}px)`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["wavePace"].includes(prop),
  })`
  will-change: transform;
  
`;

const MainWave = ({ waveTop, pace, text1, text2 }) => {
  const TOP = "top";
  const BOTTOM = "bottom";
  const getStartOffset = (type) => {
    let result = 0;
    if (type === TOP) {
      result = waveTop * 4 - 500;
    } else result = waveTop * 4 - window.innerWidth - 500;

    const isImac = util.getWindowType("imac");
    return isImac && type === TOP ? result - 800 : result;
  };
  return (
    <FixedWave waveTop={waveTop} pace={pace}>
      <StyledSVG
        id="visual"
        viewBox="0 0 6000 400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        preserveAspectRatio="none"
      >
        <DynamicWave
          id="text-curve"
          d="M0 146L52.7 157.8C105.3 169.7 210.7 193.3 316 198.3C421.3 203.3 526.7 189.7 631.8 166.3C737 143 842 110 947.2 113.2C1052.3 116.3 1157.7 155.7 1263 179.8C1368.3 204 1473.7 213 1579 196.2C1684.3 179.3 1789.7 136.7 1895 139.3C2000.3 142 2105.7 190 2210.8 210C2316 230 2421 222 2526.2 212.7C2631.3 203.3 2736.7 192.7 2842 169.2C2947.3 145.7 3052.7 109.3 3158 90.5C3263.3 71.7 3368.7 70.3 3473.8 93.7C3579 117 3684 165 3789.2 171.8C3894.3 178.7 3999.7 144.3 4105 134C4210.3 123.7 4315.7 137.3 4421 154.5C4526.3 171.7 4631.7 192.3 4737 187.2C4842.3 182 4947.7 151 5052.8 152.3C5158 153.7 5263 187.3 5368.2 202.5C5473.3 217.7 5578.7 214.3 5684 197.5C5789.3 180.7 5894.7 150.3 5947.3 135.2L6000 120L6000 401L5947.3 401C5894.7 401 5789.3 401 5684 401C5578.7 401 5473.3 401 5368.2 401C5263 401 5158 401 5052.8 401C4947.7 401 4842.3 401 4737 401C4631.7 401 4526.3 401 4421 401C4315.7 401 4210.3 401 4105 401C3999.7 401 3894.3 401 3789.2 401C3684 401 3579 401 3473.8 401C3368.7 401 3263.3 401 3158 401C3052.7 401 2947.3 401 2842 401C2736.7 401 2631.3 401 2526.2 401C2421 401 2316 401 2210.8 401C2105.7 401 2000.3 401 1895 401C1789.7 401 1684.3 401 1579 401C1473.7 401 1368.3 401 1263 401C1157.7 401 1052.3 401 947.2 401C842 401 737 401 631.8 401C526.7 401 421.3 401 316 401C210.7 401 105.3 401 52.7 401L0 401Z"
          fill={colorSet.neutral}
          wavePace={waveTop * 0.35}
        ></DynamicWave>
        <WavyText color={colorSet.text}>
          <textPath
            id="text-path"
            href="#text-curve"
            startOffset={getStartOffset(TOP)}
          >
            {text1}
          </textPath>
        </WavyText>
        <DynamicWave
          d="M0 155L52.7 170.2C105.3 185.3 210.7 215.7 316 224.2C421.3 232.7 526.7 219.3 631.8 204.7C737 190 842 174 947.2 173.3C1052.3 172.7 1157.7 187.3 1263 197C1368.3 206.7 1473.7 211.3 1579 196.5C1684.3 181.7 1789.7 147.3 1895 147.8C2000.3 148.3 2105.7 183.7 2210.8 190C2316 196.3 2421 173.7 2526.2 164.5C2631.3 155.3 2736.7 159.7 2842 170.3C2947.3 181 3052.7 198 3158 204.7C3263.3 211.3 3368.7 207.7 3473.8 196.8C3579 186 3684 168 3789.2 162.2C3894.3 156.3 3999.7 162.7 4105 182.5C4210.3 202.3 4315.7 235.7 4421 232.5C4526.3 229.3 4631.7 189.7 4737 175.8C4842.3 162 4947.7 174 5052.8 182C5158 190 5263 194 5368.2 188C5473.3 182 5578.7 166 5684 153.8C5789.3 141.7 5894.7 133.3 5947.3 129.2L6000 125L6000 401L5947.3 401C5894.7 401 5789.3 401 5684 401C5578.7 401 5473.3 401 5368.2 401C5263 401 5158 401 5052.8 401C4947.7 401 4842.3 401 4737 401C4631.7 401 4526.3 401 4421 401C4315.7 401 4210.3 401 4105 401C3999.7 401 3894.3 401 3789.2 401C3684 401 3579 401 3473.8 401C3368.7 401 3263.3 401 3158 401C3052.7 401 2947.3 401 2842 401C2736.7 401 2631.3 401 2526.2 401C2421 401 2316 401 2210.8 401C2105.7 401 2000.3 401 1895 401C1789.7 401 1684.3 401 1579 401C1473.7 401 1368.3 401 1263 401C1157.7 401 1052.3 401 947.2 401C842 401 737 401 631.8 401C526.7 401 421.3 401 316 401C210.7 401 105.3 401 52.7 401L0 401Z"
          fill={waveColorSet.layer1}
          wavePace={waveTop * 0.23}
        ></DynamicWave>

        <DynamicWave
          d="M0 219L43.5 219.8C87 220.7 174 222.3 261 227.8C348 233.3 435 242.7 522 247C609 251.3 696 250.7 782.8 257.5C869.7 264.3 956.3 278.7 1043.2 274.3C1130 270 1217 247 1304 233.3C1391 219.7 1478 215.3 1565 226.8C1652 238.3 1739 265.7 1826 274.3C1913 283 2000 273 2087 262.7C2174 252.3 2261 241.7 2348 233.8C2435 226 2522 221 2609 232C2696 243 2783 270 2869.8 285.5C2956.7 301 3043.3 305 3130.2 305.8C3217 306.7 3304 304.3 3391 297.5C3478 290.7 3565 279.3 3652 279.3C3739 279.3 3826 290.7 3913 292C4000 293.3 4087 284.7 4174 281.8C4261 279 4348 282 4435 282.3C4522 282.7 4609 280.3 4696 277.8C4783 275.3 4870 272.7 4956.8 263C5043.7 253.3 5130.3 236.7 5217.2 239.5C5304 242.3 5391 264.7 5478 278C5565 291.3 5652 295.7 5739 282.3C5826 269 5913 238 5956.5 222.5L6000 207L6000 401L5956.5 401C5913 401 5826 401 5739 401C5652 401 5565 401 5478 401C5391 401 5304 401 5217.2 401C5130.3 401 5043.7 401 4956.8 401C4870 401 4783 401 4696 401C4609 401 4522 401 4435 401C4348 401 4261 401 4174 401C4087 401 4000 401 3913 401C3826 401 3739 401 3652 401C3565 401 3478 401 3391 401C3304 401 3217 401 3130.2 401C3043.3 401 2956.7 401 2869.8 401C2783 401 2696 401 2609 401C2522 401 2435 401 2348 401C2261 401 2174 401 2087 401C2000 401 1913 401 1826 401C1739 401 1652 401 1565 401C1478 401 1391 401 1304 401C1217 401 1130 401 1043.2 401C956.3 401 869.7 401 782.8 401C696 401 609 401 522 401C435 401 348 401 261 401C174 401 87 401 43.5 401L0 401Z"
          fill={waveColorSet.layer2}
          wavePace={waveTop * 0.35}
        ></DynamicWave>
        <DynamicWave
          d="M0 313L43.5 312.7C87 312.3 174 311.7 261 309C348 306.3 435 301.7 522 297C609 292.3 696 287.7 782.8 285.3C869.7 283 956.3 283 1043.2 285.5C1130 288 1217 293 1304 290.7C1391 288.3 1478 278.7 1565 274.5C1652 270.3 1739 271.7 1826 271.8C1913 272 2000 271 2087 273C2174 275 2261 280 2348 286.2C2435 292.3 2522 299.7 2609 304C2696 308.3 2783 309.7 2869.8 313.5C2956.7 317.3 3043.3 323.7 3130.2 330.2C3217 336.7 3304 343.3 3391 346.2C3478 349 3565 348 3652 334.3C3739 320.7 3826 294.3 3913 285.2C4000 276 4087 284 4174 290.3C4261 296.7 4348 301.3 4435 295.7C4522 290 4609 274 4696 279.2C4783 284.3 4870 310.7 4956.8 317.7C5043.7 324.7 5130.3 312.3 5217.2 315.5C5304 318.7 5391 337.3 5478 341.2C5565 345 5652 334 5739 328.8C5826 323.7 5913 324.3 5956.5 324.7L6000 325L6000 401L5956.5 401C5913 401 5826 401 5739 401C5652 401 5565 401 5478 401C5391 401 5304 401 5217.2 401C5130.3 401 5043.7 401 4956.8 401C4870 401 4783 401 4696 401C4609 401 4522 401 4435 401C4348 401 4261 401 4174 401C4087 401 4000 401 3913 401C3826 401 3739 401 3652 401C3565 401 3478 401 3391 401C3304 401 3217 401 3130.2 401C3043.3 401 2956.7 401 2869.8 401C2783 401 2696 401 2609 401C2522 401 2435 401 2348 401C2261 401 2174 401 2087 401C2000 401 1913 401 1826 401C1739 401 1652 401 1565 401C1478 401 1391 401 1304 401C1217 401 1130 401 1043.2 401C956.3 401 869.7 401 782.8 401C696 401 609 401 522 401C435 401 348 401 261 401C174 401 87 401 43.5 401L0 401Z"
          fill={waveColorSet.layer3}
          wavePace={waveTop * 0.4}
        ></DynamicWave>
        <DynamicWave
          id="text-curve2"
          d="M0 326L43.5 324.5C87 323 174 320 261 329.8C348 339.7 435 362.3 522 362C609 361.7 696 338.3 782.8 331.7C869.7 325 956.3 335 1043.2 345.5C1130 356 1217 367 1304 360.5C1391 354 1478 330 1565 332.2C1652 334.3 1739 362.7 1826 375.5C1913 388.3 2000 385.7 2087 377.5C2174 369.3 2261 355.7 2348 349C2435 342.3 2522 342.7 2609 345.5C2696 348.3 2783 353.7 2869.8 359.3C2956.7 365 3043.3 371 3130.2 362C3217 353 3304 329 3391 322.8C3478 316.7 3565 328.3 3652 337.5C3739 346.7 3826 353.3 3913 361.8C4000 370.3 4087 380.7 4174 385.5C4261 390.3 4348 389.7 4435 386.3C4522 383 4609 377 4696 373.5C4783 370 4870 369 4956.8 371C5043.7 373 5130.3 378 5217.2 371.2C5304 364.3 5391 345.7 5478 338.2C5565 330.7 5652 334.3 5739 337C5826 339.7 5913 341.3 5956.5 342.2L6000 343L6000 401L5956.5 401C5913 401 5826 401 5739 401C5652 401 5565 401 5478 401C5391 401 5304 401 5217.2 401C5130.3 401 5043.7 401 4956.8 401C4870 401 4783 401 4696 401C4609 401 4522 401 4435 401C4348 401 4261 401 4174 401C4087 401 4000 401 3913 401C3826 401 3739 401 3652 401C3565 401 3478 401 3391 401C3304 401 3217 401 3130.2 401C3043.3 401 2956.7 401 2869.8 401C2783 401 2696 401 2609 401C2522 401 2435 401 2348 401C2261 401 2174 401 2087 401C2000 401 1913 401 1826 401C1739 401 1652 401 1565 401C1478 401 1391 401 1304 401C1217 401 1130 401 1043.2 401C956.3 401 869.7 401 782.8 401C696 401 609 401 522 401C435 401 348 401 261 401C174 401 87 401 43.5 401L0 401Z"
          fill={waveColorSet.layer4}
          wavePace={waveTop * 0.3}
        ></DynamicWave>
        <WavyText fontSize={20} color={colorSet.background}>
          <textPath
            id="text-path"
            href="#text-curve2"
            startOffset={getStartOffset(BOTTOM)}
          >
            {text2}
          </textPath>
        </WavyText>
      </StyledSVG>
    </FixedWave>
  );
};

export default MainWave;
