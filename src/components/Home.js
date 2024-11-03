import styled, { keyframes } from "styled-components";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { FlexBox } from "./GlobalStyles";
import WavySeparator from "./WavySeparator";
import { colorSet } from "lib/colorSet";
import Moon from "./Moon";
import MainWave from "./MainWave";
import { Fade, Slide } from "react-awesome-reveal";

const HOME_BACK_COLOR = "#1d343d";
const HOME_TOP_COLOR = colorSet.secondary;

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;

  background-color: ${HOME_BACK_COLOR};
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TargetSection = styled.section`
  width: 100vw;

  position: relative;

  height: 600vh;
  z-index: 4;
`;

const backgroundColor = ({ per }) => {
  const per1 = 100 - per < 0 ? 0 : 100 - per;
  return `
    background: linear-gradient(
      to bottom,
      ${HOME_TOP_COLOR} ${per1}%,
      ${HOME_BACK_COLOR} ${per1}% 
    );
  `;
};

const TargetSectionDiv = styled.div`
  position: ${({ isTarget }) => (isTarget ? "fixed" : "relative")};
  left: 0;
  top: 0;
  width: 600vh;
  height: 100%;
  display: flex;

  ${({ per }) => backgroundColor({ per })};
`;

const TargetSectionArticle = styled.article`
  width: 200vh;
  height: 100vh;
  display: flex;

  position: relative;
`;

const GoToWorkContainer = styled(FlexBox)`
  width: 40%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin: auto;
`;

const phraseArr = [
  "변화의 흐름을 타는 프론트엔드 개발자",
  "웹의 가능성을 탐험하며, 끝없이 새로운 파도를 만듭니다.",
  "기술의 물결 위에서 창의적인 인터랙션을 디자인합니다.",
  "사용자와의 소통을 잊지 않는, 유연한 개발자입니다.",
  "기술의 변화 속에서 더욱 유연하게, 더 나은 웹을 만들어갑니다.",
  "파도처럼 유연하게 적응하고, 창의적으로 문제를 해결합니다.",
];
const Home = () => {
  const [targetSecOffsetTop, TargetsetSectionOffsetTop] = useState(0);
  const [isTarget, setIsTarget] = useState(false);
  const [waveTop, setWaveTop] = useState(0);
  const PACE = 0.25;

  useLayoutEffect(() => {
    const target = document.querySelector("#targetSec");
    if (target) TargetsetSectionOffsetTop(target.offsetTop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop >= targetSecOffsetTop) {
        setIsTarget(true);
        const goLeft = currentScrollTop - targetSecOffsetTop;
        setWaveTop(goLeft);

        gsap.to(".target", { left: -goLeft, ease: "linear" });
      } else setIsTarget(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetSecOffsetTop]);

  return (
    <HomeContainer>
      <MainWave
        waveTop={waveTop}
        pace={PACE}
        text1={phraseArr[0]}
        text2={phraseArr[1]}
      />
      <TargetSection id="targetSec">
        <TargetSectionDiv
          className="target"
          isTarget={isTarget}
          per={Math.floor(((waveTop * PACE + 100) / window.innerHeight) * 100)}
        >
          {["1", "2", "3"].map((num, index) => {
            return (
              <TargetSectionArticle key={index}>
                {index === 2 && (
                  <>
                    <Fade
                      delay={1e3}
                      style={{ display: "flex", width: "100%" }}
                    >
                      <GoToWorkContainer></GoToWorkContainer>
                    </Fade>
                  </>
                )}
              </TargetSectionArticle>
            );
          })}
        </TargetSectionDiv>
      </TargetSection>
      <Section></Section>
    </HomeContainer>
  );
};

export default Home;
