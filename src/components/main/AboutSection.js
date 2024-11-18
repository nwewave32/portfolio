import { breakpoints } from "lib/globalData";
import React from "react";
import styled from "styled-components";
import { FlexBox } from "../GlobalStyles";
import { colorSet } from "lib/colorSet";
import { Fade } from "react-awesome-reveal";

// 전체 컨테이너 스타일 정의
const FullFullContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  overflow: hidden;
`;

const BottomImg = styled.img`
  width: 100%;

  position: absolute;
  bottom: -25vh;
  right: 0;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    bottom: 0;
  }
`;

const TextBox = styled(FlexBox)`
  color: ${colorSet.background};
  box-sizing: border-box;
  padding: 0 25%;
  font-size: 3vh;
  position: absolute;
  top: 0;
  left: 0;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;

  width: 100%;
  height: 100%;
  font-weight: 400;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    padding: 0 10%;
    font-size: 2.5vh;
    color: ${colorSet.text};
    font-weight: 100;
  }
`;

const TextBox2 = styled(TextBox)`
  color: ${colorSet.text};
  clip-path: url(#myClipPath);

  width: 100%;
  height: 100%;
`;

const StyledSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 51%,
    ${colorSet.secondary} 51%
  );
`;

const AboutSection = () => {
  const isMobile = window.innerWidth <= breakpoints.tabletPortrait;
  const text =
    "개발자는 새로운 것을 창조하는 사람이라고 생각합니다. 저는 창의적인 아이디어를 기술로 뒷받침하며 더 나은 사용자 경험을 만들어가는 데 가치를 둡니다. 프론트엔드 개발은 사용자와 가장 가까운 곳에서 소통하는 창구로, 제가 만든 화면이 직관적으로 메시지를 전달하고 주제를 돋보이게 할 수 있다는 점이 매력적입니다. 특히 리액트를 기반으로 한 개발을 주로 해왔으며, 앞으로는 더 단순하면서도 명확한 사용자 친화적인 화면을 설계하고 싶습니다. 제 포트폴리오의 주제는 'wave'로, 물의 유동성과 유연함을 통해 자연의 원리를 친근하게 느끼며 안정감을 얻을 수 있도록 구성했습니다. 끊임없이 변화하는 웹 환경 속에서 흐름을 따라가며 창의적이고 유연한 개발자로 성장하고자 합니다.";
  return (
    <FullFullContainer>
      <>
        {/* <StyledSVG
          width="100%"
          height="100%"
          viewBox="0 0 1278 804"
          xmlns="http://www.w3.org/2000/svg"
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
        </StyledSVG> */}
        <StyledSVG
          viewBox="0 0 1278 804"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio={isMobile ? "xMidYMax slice" : "none"}
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
        {/* <Fade delay={1e5}>{text}</Fade> */}
        {text}
      </TextBox>
      {!isMobile && (
        <TextBox2 justify="center" align="center">
          <Fade delay={1e5}>{text}</Fade>
          {/* {text} */}
        </TextBox2>
      )}
    </FullFullContainer>
  );
};

export default AboutSection;
