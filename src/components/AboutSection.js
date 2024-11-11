import { breakpoints } from "lib/globalData";
import React from "react";
import styled from "styled-components";
import { FlexBox } from "./GlobalStyles";

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

const StyledSVG = styled.svg`
  width: 113vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextWithClip = styled.div`
  position: absolute;
  z-index: 1;
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  color: red; /* 텍스트 색상 */
  clip-path: url(#waveClip); /* 클립 경로 적용 */
  width: 100%;
  padding: 20px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); /* 텍스트 가독성을 높이기 위한 그림자 */
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
  width: 45vw;
  font-size: 3vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    width: 80vw;
  }
`;

const AboutSection = () => {
  return (
    <FullFullContainer>
      <BottomImg src="main/about.svg" alt="bottom_" />
      <TextBox>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TextBox>
    </FullFullContainer>
  );
};

export default AboutSection;
