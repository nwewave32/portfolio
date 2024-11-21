import { breakpoints } from "lib/globalData";
import React from "react";
import styled from "styled-components";
import { FlexBox, StyledSvg } from "../GlobalStyles";
import { colorSet } from "lib/colorSet";
import { Fade } from "react-awesome-reveal";
import { util } from "lib/util";

const FullFullContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  overflow: hidden;
`;

const TextBox = styled(FlexBox)`
  color: ${colorSet.background};
  box-sizing: border-box;
  padding: 0 25%;

  position: absolute;
  top: 0;
  left: 0;
  font-size: 3vh;
  z-index: 2;
  text-align: center;

  width: 100%;
  height: 100%;
  font-weight: 300;
  line-height: 1.8;
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 10%;
  }

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    color: ${colorSet.text};
    font-weight: 100;
    font-size: 1.8vh;
  }
`;

const TextBoxMask = styled(TextBox)`
  color: ${colorSet.text};
  clip-path: url(#myClipPath);

  width: 100%;
  height: 100%;
  > div {
    font-size: 3vh;
  }
`;

const StyledSVG = styled(StyledSvg)`
  position: absolute;

  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 51%,
    ${colorSet.secondary} 51%
  );
`;

const AboutSection = () => {
  const isTablet = util.getWindowType("tabletPortrait");
  const text =
    "저는 새로운 경험을 창조하는 개발자입니다. 창의적인 아이디어와 기술을 결합해, 사용자와 직관적으로 소통하는 화면을 만들어내는 데 열정을 쏟고 있습니다. 프론트엔드 개발은 단순한 코딩을 넘어 예술처럼 느껴지는 과정으로, 리액트를 기반으로 사용자 친화적이고 명확한 메시지를 전달하는 인터페이스를 설계합니다. 제 포트폴리오의 주제인 'wave'는 물의 유동성과 유연함을 담아 자연의 원리를 친근하고 편안하게 느낄 수 있도록 구성했습니다. 변화의 흐름을 따라가며, 창의적이고 유연한 시선으로 세상을 바라보는 개발자가 되고자 합니다.";
  return (
    <FullFullContainer>
      <>
        <StyledSVG
          viewBox="0 0 1278 804"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio={isTablet ? "xMidYMax slice" : "none"}
        >
          <defs>
            <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
              <path
                d="
                  M1 0.896V0.481C0.828 0.531 0.618 0.512 0.591 0.374C0.564 0.235 0.563 0.165 0.495 0.134
                  C0.427 0.104 0.359 0.276 0.287 0.242C0.216 0.208 0.228 0.075 0.196 0.031
                  C0.164 -0.014 0.104 -0.006 0 0.056V0.896H1Z"
                fill="none"
              />
            </clipPath>
          </defs>
          <path
            d="M1278 721.358V386.858C1059.94 427.194 790.686 411.814 756 300.858C721.314 189.901 720.071 132.939 632.5 108.358C544.929 83.7759 459.562 221.511 367 194.358C274.438 167.204 290.428 59.977 249.5 24.3576C208.572 -11.2617 132.178 -7.45573 0 44.8576V721.358H1278Z"
            fill="#FFF9E3"
            stroke="#FFF9E3"
          />
          <path
            d="M1278 803V468.5C1059.94 508.836 790.686 493.457 756 382.5C721.314 271.543 720.071 214.582 632.5 190C544.929 165.418 459.562 303.154 367 276C274.438 248.846 290.428 141.619 249.5 106C208.572 70.3807 132.178 74.1866 0 126.5V803H1278Z"
            fill="#E0C792"
            stroke="#E0C792"
          />
        </StyledSVG>
      </>
      <TextBox justify="center" align="center">
        {text}
      </TextBox>
      {!isTablet && (
        <TextBoxMask justify="center" align="center">
          <Fade delay={1e5}>{text}</Fade>
        </TextBoxMask>
      )}
    </FullFullContainer>
  );
};

export default AboutSection;
