import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { colorSet } from "lib/colorSet";

const MoonContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;
const StyledSvg = styled.svg.withConfig({
  shouldForwardProp: (prop) => !["posY", "posX"].includes(prop),
})`
  position: absolute;
  top: ${({ posY }) => posY}px;
  left: ${({ posX }) => posX}px;
  filter: drop-shadow(2px 3px 1px rgb(255 255 255 / 0.4));
`;

const Moon = () => {
  const [svgArr, setSvgArr] = useState([]);
  useLayoutEffect(() => {
    let tmpArr = [];
    let radius = 300;
    const colorSetArr = Object.values(colorSet);

    for (let i = 0; i < 15; i++) {
      const pos = i * 5;
      const randomIdx = Math.floor(Math.random() * colorSetArr.length);
      const randomColor = colorSetArr[randomIdx] ?? colorSet.base;

      tmpArr.push({
        posX: pos,
        posY: pos,
        color: randomColor,
        radius: radius,
      });
      radius -= 10;
    }
    tmpArr[14] = { ...tmpArr[14], color: colorSet.neutral, isCenter: true };
    setSvgArr(tmpArr);
  }, []);

  return (
    <MoonContainer>
      {svgArr.map((svgItem) => (
        <StyledSvg
          key={svgItem.posX + svgItem.posY}
          id="visual"
          viewBox="0 0 300 300"
          width={svgItem.radius}
          height={svgItem.radius}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          posX={svgItem.posX}
          posY={svgItem.posY}
        >
          <g transform="translate(150.16167159410367 149.12873890939673)">
            <path
              d="M91.3 -89.1C115.6 -66.9 130.8 -33.5 129.5 -1.3C128.3 30.9 110.5 61.9 86.2 84.7C61.9 107.5 30.9 122.3 -2.2 124.5C-35.4 126.7 -70.7 116.4 -94.4 93.5C-118 70.7 -130 35.4 -129.9 0.1C-129.8 -35.1 -117.6 -70.2 -93.9 -92.4C-70.2 -114.6 -35.1 -123.8 -0.8 -123C33.5 -122.1 66.9 -111.3 91.3 -89.1"
              fill={svgItem?.isCenter ? svgItem.color : "none"}
              stroke={svgItem.color}
              strokeWidth="6"
            ></path>
          </g>
        </StyledSvg>
      ))}
    </MoonContainer>
  );
};

export default Moon;
