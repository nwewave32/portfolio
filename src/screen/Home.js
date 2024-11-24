import styled, { keyframes } from "styled-components";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colorSet, waveColorSet } from "lib/colorSet";

import MainWave from "../components/main/MainWave";

import BottomSection from "../components/main/BottomSection";
import AboutSection from "../components/main/AboutSection";
import WorkSection from "../components/main/WorkSection";
import { WordBubble } from "components/GlobalStyles";

const HOME_BACK_COLOR = colorSet.background;
const HOME_TOP_COLOR = colorSet.secondary;

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${HOME_BACK_COLOR};
`;

const transform = ({ per }) => {
  const percent = 100 - per * 100;
  const percent2 = Number(per) * 1.5;

  if (percent < 20) {
    return "display: none;";
  } else
    return `
  transform: 
    translate(-50%, -50%) 
    scale(${1 - percent2}, ${1 - percent2});
`;
};

const Logo = styled.div.withConfig({
  shouldForwardProp: (prop) => !["per"].includes(prop),
})`
  position: fixed;
  top: 50%;
  left: 50%;

  z-index: 10;
  width: max-content;

  ${({ per }) => transform({ per })};
  transition: transform 2s linear;
`;

const SectionContainer = styled.div
  .attrs(({ per }) => ({
    style: {
      marginTop: `calc(100vh - ${per}px)`,
      transform: `translateY(${per}px)`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["per", "pageHeight"].includes(prop),
  })`
  height: 400vh;
`;
const Section = styled.section.withConfig({
  shouldForwardProp: (prop) => !["bg"].includes(prop),
})`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ bg }) => bg ?? HOME_BACK_COLOR};
`;

const FixedSection = styled(Section).withConfig({
  shouldForwardProp: (prop) => !["per"].includes(prop),
})`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${HOME_TOP_COLOR};
  visibility: ${({ per }) => (per > 200 ? "hidden" : "visible")};
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
  const section1Ref = useRef();
  const section3Ref = useRef();

  const [waveTop, setWaveTop] = useState(0);
  const PACE = 2;
  const [percent, setPercent] = useState(0);
  const [isTarget1Shown, setIsTarget1Shown] = useState(false);
  const [isTarget3Shown, setIsTarget3Shown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setWaveTop(currentScrollTop);

      if (section3Ref.current) {
        if (
          section3Ref.current.offsetTop - window.innerHeight / 2 <=
          currentScrollTop
        ) {
          setIsTarget3Shown(true);
        } else setIsTarget3Shown(false);
      }

      if (section1Ref.current) {
        if (
          section1Ref.current.offsetTop - window.innerHeight / 2 <=
          currentScrollTop
        ) {
          setIsTarget1Shown(true);
        } else setIsTarget1Shown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setPercent((waveTop * PACE + 100) / window.innerHeight);
  }, [waveTop]);

  return (
    <HomeContainer>
      <FixedSection per={Math.floor(percent * 100)}>
        <Logo per={percent.toFixed(3)}>
          <WordBubble height={20} word="nwewave" isLazy={false} />
        </Logo>
      </FixedSection>
      <SectionContainer
        per={
          waveTop * PACE >= window.innerHeight
            ? window.innerHeight
            : waveTop * PACE
        }
      >
        <MainWave
          waveTop={waveTop}
          pace={PACE}
          text1={phraseArr[0]}
          text2={phraseArr[1]}
        />
        <Section id="first" ref={section1Ref}>
          <AboutSection isTargetShown={isTarget1Shown} scroll={waveTop} />
        </Section>
        <Section id="second" bg={colorSet.secondary}>
          <WorkSection scroll={waveTop} />
        </Section>
        <Section id="third" ref={section3Ref} bg={colorSet.background}>
          <BottomSection isTargetShown={isTarget3Shown} />
        </Section>
      </SectionContainer>
    </HomeContainer>
  );
};

export default Home;
