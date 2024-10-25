import { colorSet } from "lib/colorSet";
import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  background-color: ${colorSet.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const SvgContainer = styled.svg`
  font-weight: bold;
  max-width: 600px;
  height: auto;
`;

export default function Test() {
  return (
    <BackgroundContainer>
      <SvgContainer viewBox="0 0 100 20">
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#326384" />
            <stop offset="95%" stopColor="#123752" />
          </linearGradient>
          <pattern
            id="wave"
            x="0"
            y="0"
            width="120"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              fill="url(#gradient)"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1.5s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
        <text
          textAnchor="middle"
          x="50"
          y="15"
          fontSize="17"
          fill="url(#wave)"
          fillOpacity="0.6"
        >
          VISIT SITE
        </text>
        <text
          textAnchor="middle"
          x="50"
          y="15"
          fontSize="17"
          fill="url(#gradient)"
          fillOpacity="0.1"
        >
          VISIT SITE
        </text>
      </SvgContainer>
    </BackgroundContainer>
  );
}
