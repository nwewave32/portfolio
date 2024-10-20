import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FlexBox } from "./GlobalStyles";

const AboutContainer = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

const AboutSection = styled.section`
  display: flex;
  flex: 3;
  position: relative;
`;

const AboutSticky = styled(FlexBox)`
  position: sticky;
  margin-top: 50px;
  padding: 80px 20px;
  top: 0%;
  height: min-content;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 20px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); /* 텍스트 그림자 강화 */
`;

const AboutText = styled.p`
  text-align: center;
  margin: 20px 0;
  padding: 0 20px;
  font-size: 1.1rem;
  word-break: keep-all;
`;

const Button = styled.button`
  color: #282c34; /* 버튼 텍스트 색상 */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #21a1f1; /* 호버 시 버튼 배경색 */
  }
`;

const CareerHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  cursor: pointer;
`;

const CareerList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CareerItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 15px;
  position: relative;
`;

const EducationHeading = styled.h3`
  font-size: 1.8rem;
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
  flex: 7;
  width: 100%;
`;
const DetailsWrapper = styled.div`
  animation: ${SlideIn} 0.6s ease forwards;
  padding: 50px 0;
`;

const StyledUl = styled.ul`
  margin-top: 5px;
  list-style-type: none;
  padding: 0;
`;

const SkillsSection = styled.section`
  padding: 50px 100px;
  text-align: center;
`;

const SkillTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 200;
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
`;

const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const SkillName = styled.p`
  font-size: 1.2rem;
`;

const skills = [
  { name: "HTML", icon: "/skills/HTML.svg" },
  { name: "CSS", icon: "/skills/CSS.svg" },
  { name: "JavaScript", icon: "/skills/JavaScript.svg" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Vue", icon: "/skills/VueJS-Light.svg" },
  { name: "TypeScript", icon: "/skills/TypeScript.svg" },
  { name: "Recoil", icon: "/skills/recoil.png" },
  { name: "Redux", icon: "/skills/Redux.svg" },
  { name: "PHP", icon: "/skills/php.png" },
  { name: "Laravel", icon: "/skills/Laravel-Light.svg" },
  { name: "MySQL", icon: "/skills/MySQL-Light.svg" },
  { name: "Dart", icon: "/skills/Dart-Light.svg" },
  { name: "Flutter", icon: "/skills/Flutter-Light.svg" },
  { name: "Python", icon: "/skills/Python-Light.svg" },
  { name: "Babel", icon: "/skills/Babel.svg" },
  { name: "Zeplin", icon: "/skills/zeplin.png" },
  { name: "Figma", icon: "/skills/Figma.svg" },
  { name: "StyledComponents", icon: "/skills/StyledComponents.svg" },
  { name: "TailwindCSS", icon: "/skills/TailwindCSS-Light.svg" },
  { name: "Git", icon: "/skills/Git.svg" },
  { name: "Github", icon: "/skills/Github-Light.svg" },
  { name: "Firebase", icon: "/skills/Firebase-Light.svg" },
  { name: "LinkedIn", icon: "/skills/LinkedIn.svg" },
  { name: "VSCode", icon: "/skills/VSCode-Light.svg" },
];

const AboutMe = () => {
  const [showCareer, setShowCareer] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <AboutContainer>
      <DetailsSection direction="column" align="center">
        <Fade delay={100}>
          <SkillsSection>
            <SkillTitle>Languages & Dev Tools</SkillTitle>
            <SkillSet justify="center">
              {skills.map((skill) => (
                <Fade delay={100} key={skill.name}>
                  <SkillCard key={skill.name}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
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

      <AboutSection>
        <AboutSticky direction="column" align="center" justify="center">
          <Fade triggerOnce>
            <ProfileImageWrapper
              onClick={() => {
                window.open(
                  "https://github.com/nwewave32",
                  "_blank",
                  "noopener, noreferrer"
                );
              }}
            >
              <ProfileImage src="wave.png" alt="My Profile" />
            </ProfileImageWrapper>
            <AboutHeading>About Me</AboutHeading>
            <AboutText>
              새로운 것을 창조하는 프론트엔드 개발자. 끊임없는 호기심, 유연한
              사고, 그리고 빠른 적응력은 저의 닉네임인 ‘nwewave’와 비슷합니다.
              파도가 쉼 없이 밀려오듯, 저도 변화하는 기술 트렌드 속에서 끊임없이
              발전하며, 파도의 흐름처럼 사람들과 세상에 긍정적인 기여를 하고
              싶습니다.
            </AboutText>
            <AboutText>
              A frontend developer who loves creating new things. My boundless
              curiosity, flexible thinking, and quick adaptability are much like
              my nickname, ‘nwewave' Just as waves continuously roll in, I
              strive to grow in the ever-changing tech landscape and, like the
              flow of the wave, I aim to make a positive impact on people and
              the world.
            </AboutText>
          </Fade>
        </AboutSticky>
      </AboutSection>
    </AboutContainer>
  );
};

export default AboutMe;
