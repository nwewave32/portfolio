import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FlexBox } from "../components/GlobalStyles";
import WavySeparator from "../components/WavySeparator";
import { colorSet } from "lib/colorSet";
import { breakpoints } from "lib/globalData";
import { skills } from "lib/globalData";
import CustomImg from "components/CustomImg";

const AboutContainer = styled(FlexBox)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const AboutSection = styled.section`
  width: 100%;
  padding: 150px;
  background-color: ${colorSet.base};
`;

const StyledFade = styled(Fade)`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  background-color: ${colorSet.background};
  margin-bottom: 10px;
`;

const ProfileImage = styled(CustomImg)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const AboutHeading = styled.h2`
  margin: 30px 0;
  text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3);
  color: ${colorSet.background};
`;

const TextFade = styled(Fade)`
  width: 50%;

  text-align: center;
  margin: 20px 0;
  padding: 0 20px;
  font-size: 2vh;
  line-height: 1.5;

  color: ${colorSet.background};
  overflow-wrap: break-word;
  white-space: normal !important;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.imac}px) {
    width: 35%;
  }
`;

const CareerHeading = styled.h3`
  margin-bottom: 10px;
  cursor: pointer;
`;

const CareerList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CareerItem = styled.li`
  margin-bottom: 15px;
  position: relative;
`;

const EducationHeading = styled.h3`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const SlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const DetailsSection = styled(FlexBox)`
  width: 100%;

  background-color: ${colorSet.background};
`;
const DetailsWrapper = styled.div`
  animation: ${SlideIn} 0.6s ease forwards;
  padding: 50px 18px;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 50px 24px;
  }
`;

const StyledUl = styled.ul`
  margin-top: 5px;
  list-style-type: none;
  padding: 0;
`;

const SkillsSection = styled.section`
  padding: 80px 100px 50px 100px;
  text-align: center;
  max-width: 1000px;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 50px 18px;
  }

  @media (min-width: ${breakpoints.imac}px) {
    max-width: 3000px;
  }
`;

const SkillTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 400;
`;

const SkillSet = styled(FlexBox)`
  flex-wrap: wrap;
`;

const SkillCard = styled.div`
  margin: 10px;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 10px;
  @media (max-width: ${breakpoints.mobile}px) {
    margin: 5px;
    padding: 10px;
  }

  @media (min-width: ${breakpoints.imac}px) {
    margin: 15px;
    padding: 20px;
  }
`;

const SkillIcon = styled(CustomImg)`
  width: 10vw;
  height: 10vw;
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-bottom: 5px;
  }

  @media (min-width: ${breakpoints.imac}px) {
    margin-bottom: 15px;
  }
`;

const SkillName = styled.p``;

const EmptySeparator = styled.div`
  width: 100%;
  padding-top: 500px;
  background-color: ${colorSet.base};
  position: relative;

  @media (max-width: ${breakpoints.mobile}px) {
    padding-top: 200px;
  }

  @media (min-width: ${breakpoints.mobile}px) {
    padding-top: 350px;
  }

  @media (min-width: ${breakpoints.imac}px) {
    padding-top: 900px;
  }
`;

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    console.log("##isHovered", isHovered);
  }, [isHovered]);
  return (
    <AboutContainer direction="column" align="center">
      <AboutSection>
        <StyledFade triggerOnce>
          <ProfileImageWrapper
            onClick={() => {
              window.open(
                "https://github.com/nwewave32",
                "_blank",
                "noopener, noreferrer"
              );
            }}
          >
            <ProfileImage
              imgSrc={isHovered ? "main/me.png" : "wave.png"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              alt="My Profile"
            />
          </ProfileImageWrapper>
          <AboutHeading>About Me</AboutHeading>

          <TextFade>
            새로운 것을 창조하는 프론트엔드 개발자. 끊임없는 호기심, 유연한
            사고, 그리고 빠른 적응력은 저의 닉네임인 ‘nwewave’와 비슷합니다.
            파도가 쉼 없이 밀려오듯, 저도 변화하는 기술 트렌드 속에서 끊임없이
            발전하며, 파도의 흐름처럼 사람들과 세상에 긍정적인 기여를 하고
            싶습니다.
          </TextFade>

          <TextFade>
            A frontend developer who loves creating new things. My boundless
            curiosity, flexible thinking, and quick adaptability are much like
            my nickname, ‘nwewave' Just as waves continuously roll in, I strive
            to grow in the ever-changing tech landscape and, like the flow of
            the wave, I aim to make a positive impact on people and the world.
          </TextFade>
        </StyledFade>
      </AboutSection>

      <EmptySeparator>
        <WavySeparator
          mainColor={colorSet.background}
          backColor={colorSet.accent}
        />
      </EmptySeparator>
      <DetailsSection direction="column" align="center">
        <Fade delay={100}>
          <SkillsSection>
            <SkillTitle>Languages & Dev Tools</SkillTitle>
            <SkillSet justify="center">
              {skills.map((skill) => (
                <Fade delay={100} key={skill.name}>
                  <SkillCard key={skill.name}>
                    <SkillIcon imgSrc={skill.icon} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                </Fade>
              ))}
            </SkillSet>
          </SkillsSection>
        </Fade>

        <DetailsWrapper>
          <Fade cascade delay={100}>
            <CareerHeading>경력</CareerHeading>
            <CareerList>
              <CareerItem>
                <span>
                  (주)아뮤즈 (2021.12 – 2024.04) / 프론트엔드 개발자 (대리)
                </span>
                <StyledUl>
                  <li>React 기반의 웹 애플리케이션 개발 및 유지보수</li>
                  <li>API 연동 및 상태 관리(Recoil) 구현</li>
                  <li>반응형 웹사이트 개발 및 성능 최적화</li>
                  <li>
                    디자이너, 백엔드 개발자, PM 등 다양한 팀원들과의 원활한 협업
                  </li>
                </StyledUl>
              </CareerItem>
            </CareerList>
          </Fade>

          <Fade cascade delay={100}>
            <EducationHeading>학력</EducationHeading>
            <CareerList>
              <CareerItem>
                <span>부경대학교 (2017.03 - 2022.08)</span>
                <StyledUl>
                  <li>제1전공: 전기공학부 디스플레이반도체공학전공</li>
                  <li>제2전공: 컴퓨터공학부 소프트웨어 인공지능전공</li>
                </StyledUl>
              </CareerItem>
            </CareerList>
          </Fade>
        </DetailsWrapper>
      </DetailsSection>
    </AboutContainer>
  );
};

export default AboutMe;
