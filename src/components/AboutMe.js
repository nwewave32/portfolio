import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal"; // 애니메이션 라이브러리

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  text-align: center;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #61dafb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #21a1f1;
  }
`;

const DetailsSection = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 20px 24px;
  text-align: left;
`;

const CareerHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
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

const DetailsWrapper = styled.div`
  animation: ${SlideIn} 0.6s ease forwards;
`;

const StyledUl = styled.ul`
  margin-top: 5px;
`;

const SkillsSection = styled.section`
  padding: 50px;
  background-color: #f5f5f5;
  text-align: center;
`; //rgb(244, 242, 237)

const SkillSet = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillCard = styled.div`
  margin: 10px;
  text-align: center;
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
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.png" },
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
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <AboutSection>
        <Fade triggerOnce>
          <ProfileImageWrapper>
            <ProfileImage src="wave.png" alt="My Profile" />
          </ProfileImageWrapper>
          <AboutHeading>About Me</AboutHeading>
          <AboutText>
            3년의 프론트엔드 개발 경험을 바탕으로 사용자 친화적인 UI와 성능
            최적화된 웹 애플리케이션을 개발했습니다. 최신 웹 기술을 사용하여
            생산성과 품질을 높이는 데 기여했습니다. todo: 수정
          </AboutText>
        </Fade>
      </AboutSection>
      <Fade delay={1e3}>
        <SkillsSection>
          <h2>My Skills</h2>
          <SkillSet>
            {skills.map((skill) => (
              <SkillCard key={skill.name}>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillSet>
        </SkillsSection>
      </Fade>
      <Fade delay={1e3} cascade damping={1e-1}>
        <DetailsSection>
          <DetailsWrapper>
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
          </DetailsWrapper>
        </DetailsSection>
      </Fade>
    </>
  );
};

export default AboutMe;
