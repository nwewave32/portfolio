import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WaveContainer = styled.div`
  position: relative;
  width: 100vw; /* 화면 전체 너비 */
  height: 100vh; /* 화면 전체 높이 */
  overflow: hidden;
`;

const WaveSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* 부모 컨테이너에 맞게 너비 100% */
  height: auto; /* 높이는 자동 조정 */
`;

const ScrollWaveSeparator = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <WaveContainer>
      <WaveSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5000 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0099ff"
          d="M0,96L10.9,133.3C21.8,171,44,245,65,256C87.3,267,109,213,131,181.3C152.7,149,175,139,196,165.3C218.2,192,240,256,262,261.3C283.6,267,305,213,327,208C349.1,203,371,245,393,245.3C414.5,245,436,203,458,170.7C480,139,502,117,524,128C545.5,139,567,181,589,192C610.9,203,633,181,655,176C676.4,171,698,181,720,202.7C741.8,224,764,256,785,245.3C807.3,235,829,181,851,181.3C872.7,181,895,235,916,250.7C938.2,267,960,245,982,218.7C1003.6,192,1025,160,1047,133.3C1069.1,107,1091,85,1113,101.3C1134.5,117,1156,171,1178,197.3C1200,224,1222,224,1244,192C1265.5,160,1287,96,1309,85.3C1330.9,75,1353,117,1375,128C1396.4,139,1418,117,1429,106.7L1440,96L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
        />
      </WaveSVG>
    </WaveContainer>
  );
};

const Test = () => {
  return (
    <div style={{ width: "100vw" }}>
      <ScrollWaveSeparator />
      <div
        style={{ height: "200vh", paddingTop: "100px", textAlign: "center" }}
      >
        <h1>Scroll Down</h1>
        <p>Keep scrolling to see the wave effect!</p>
      </div>
    </div>
  );
};

export default Test;
