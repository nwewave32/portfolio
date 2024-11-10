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
  return (
    <FullFullContainer>
      <StyledSVG
        viewBox="0 0 1440 780"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 809V343C147.352 238.884 208 173 328 186.165C448 199.331 584.5 297.5 716.5 264C848.5 230.5 824 73.5 914.5 58.5C1005 43.5 1121.5 126 1181 138C1240.5 150 1250.95 102.28 1278 1V809H0.5Z"
          fill="#F7F7F7"
        />
      </StyledSVG>

      {/* 텍스트 영역, 클립을 적용한 텍스트 */}
      <TextWithClip>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </TextWithClip>

      {/* SVG 클립 경로 정의 */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path
              d="M0.5 809V343C147.352 238.884 208 173 328 186.165C448 199.331 584.5 297.5 716.5 264C848.5 230.5 824 73.5 914.5 58.5C1005 43.5 1121.5 126 1181 138C1240.5 150 1250.95 102.28 1278 1V809H0.5Z"
              fill="#F7F7F7"
            />
          </clipPath>
        </defs>
      </svg>
    </FullFullContainer>
  );
};

export default AboutSection;
