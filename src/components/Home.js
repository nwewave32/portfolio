import styled, { keyframes } from "styled-components";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

import WavySeparator from "./WavySeparator";
import { colorSet, waveColorSet } from "lib/colorSet";
import Moon from "./Moon";
import MainWave from "./MainWave";
import { Fade, Slide } from "react-awesome-reveal";
import { breakpoints } from "lib/globalData";
import BottomSection from "./BottomSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";

const HOME_BACK_COLOR = "#1d343d";
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

  if (percent < 50) {
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

const StyledImg = styled.img.attrs(() => ({}))`
  height: 20vh;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    height: 10vw;
  }

  /* Tablet - Portrait 이상 */
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    height: 10vw;
  }
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

const StyledSVG = styled.svg`
  background-color: pink;
`;

const FixedSection = styled(Section).withConfig({
  shouldForwardProp: (prop) => !["per"].includes(prop),
})`
  position: fixed;
  top: ${({ per }) => (per > 100 ? -30 : 0)}%;
  left: 0;
  background-color: ${HOME_TOP_COLOR};
`;

const IntroContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 0;
  width: 50vw;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(247, 247, 247, 0.1);
  box-sizing: border-box;
  font-size: 3vh;
  line-height: 2;
  color: ${colorSet.background};
`;

const BottomImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
`;

// 점차 밑으로 이동하며 페이드 아웃되는 애니메이션
const scrollAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ContactArrow = styled.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div`
  opacity: 1;
  animation: ${scrollAnimation} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const ArrowImg = styled.img`
  transform: rotate(90deg);
  width: 36px;
  filter: invert(100%);
  margin-top: -5px;
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
          <StyledImg src="main/n.svg" alt="logo" />
          <StyledImg src="main/w.svg" alt="logo" />
          <StyledImg src="main/e.svg" alt="logo" />
          <StyledImg src="main/w.svg" alt="logo" />
          <StyledImg src="main/a.svg" alt="logo" />
          <StyledImg src="main/v.svg" alt="logo" />
          <StyledImg src="main/e.svg" alt="logo" />
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
        <Section id="second" bg={colorSet.background}>
          <WorkSection scroll={waveTop} />
        </Section>
        <Section id="third" ref={section3Ref}>
          <BottomSection isTargetShown={isTarget3Shown} />
          <ContactArrow>
            {[0, 0, 0].map((item, idx) => (
              <Arrow key={idx + item}>
                <ArrowImg src="next.png" alt="keep_scroll" />
              </Arrow>
            ))}
          </ContactArrow>
          <BottomImg src="main/bottom.svg" alt="bottom_" />
        </Section>
      </SectionContainer>
    </HomeContainer>
  );
};

export default Home;
