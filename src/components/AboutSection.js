import React from "react";
import styled from "styled-components";

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

// AboutSection 컴포넌트 정의
const AboutSection = () => {
  return <FullFullContainer></FullFullContainer>;
};

export default AboutSection;
