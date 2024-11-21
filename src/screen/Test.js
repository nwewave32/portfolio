// App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  position: fixed;

  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  font-weight: 700;
  color: white;
`;

// SVG clip-path를 적용한 두 번째 텍스트
const TextWithSvgClip = styled(Wrapper)`
  background-color: white;
  color: black;
  clip-path: url(#waveClip); /* SVG의 id를 참조 */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Wrapper>
      <TextWithSvgClip>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TextWithSvgClip>

      {/* SVG 클립 경로 정의 */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path
              d="M0.5 809V343C147.352 238.884 208 173 328 186.165C448 199.331 584.5 297.5 716.5 264C848.5 230.5 824 73.5 914.5 58.5C1005 43.5 1121.5 126 1181 138C1240.5 150 1250.95 102.28 1278 1V809H0.5Z"
              fill="#F7F7F7"
              stroke="#F7F7F7"
              transform="ffscale(0.00078, 0.00123)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default App;
