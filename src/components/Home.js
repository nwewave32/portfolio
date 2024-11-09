import styled, { keyframes } from "styled-components";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { FlexBox } from "./GlobalStyles";
import WavySeparator from "./WavySeparator";
import { colorSet, waveColorSet } from "lib/colorSet";
import Moon from "./Moon";
import MainWave, { WavyText } from "./MainWave";
import { Fade, Slide } from "react-awesome-reveal";
import { breakpoints } from "lib/globalData";

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

const StyledSVG = styled.svg``;

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
  background-color: rgba(247, 247, 247, 0.2);
  box-sizing: border-box;
  font-size: 3vh;
  line-height: 2;
  color: ${colorSet.background};
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
  const section2Ref = useRef();
  const [visible, setIsVisible] = useState(false);
  const [waveTop, setWaveTop] = useState(0);
  const PACE = 2;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setWaveTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 1.0 } // Adjust threshold as needed
    );

    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (section2Ref.current) observer.unobserve(section2Ref.current);
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
        <Section id="first">
          <StyledSVG
            viewBox="0 0 6000 400"
            width="6000"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <path
              d="M0 326L43.5 324.5C87 323 174 320 261 329.8C348 339.7 435 362.3 522 362C609 361.7 696 338.3 782.8 331.7C869.7 325 956.3 335 1043.2 345.5C1130 356 1217 367 1304 360.5C1391 354 1478 330 1565 332.2C1652 334.3 1739 362.7 1826 375.5C1913 388.3 2000 385.7 2087 377.5C2174 369.3 2261 355.7 2348 349C2435 342.3 2522 342.7 2609 345.5C2696 348.3 2783 353.7 2869.8 359.3C2956.7 365 3043.3 371 3130.2 362C3217 353 3304 329 3391 322.8C3478 316.7 3565 328.3 3652 337.5C3739 346.7 3826 353.3 3913 361.8C4000 370.3 4087 380.7 4174 385.5C4261 390.3 4348 389.7 4435 386.3C4522 383 4609 377 4696 373.5C4783 370 4870 369 4956.8 371C5043.7 373 5130.3 378 5217.2 371.2C5304 364.3 5391 345.7 5478 338.2C5565 330.7 5652 334.3 5739 337C5826 339.7 5913 341.3 5956.5 342.2L6000 343"
              fill="none"
              stroke="none"
              strokeWidth="1"
              id="text-curve3"
            ></path>

            <WavyText fill={colorSet.background}>
              <textPath
                id="text-path"
                href="#text-curve3"
                startOffset={waveTop * 5 - window.innerWidth * 2.5 - 500}
              >
                {phraseArr[2]}
              </textPath>
            </WavyText>
          </StyledSVG>

          <IntroContainer>
            "안녕하세요 - 한국에서 활동하는 프론트엔드 개발자입니다. 저는
            리액트를 중심으로 사용자와 소통하는 웹을 설계하며, 다양한 사람들과의
            아이디어 교류와 협업을 중요시합니다. 언제나 더 나은 경험을 위해 함께
            고민하고, 효율적인 소통으로 창의적인 결과를 만들어내고자 합니다."
          </IntroContainer>
        </Section>
        <Section id="second" ref={section2Ref} bg="yellow"></Section>
        <Section id="third"></Section>
      </SectionContainer>
    </HomeContainer>
  );
};

export default Home;
