import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import WavySeparator from "./WavySeparator";
import DetailLayout from "./DetailLayout";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { Fade } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";
import InfiniteAutoSlider from "./InfiniteAutoSlider";
import { useDispatch, useSelector } from "react-redux";

const ProjectContainer = styled(FlexBox)`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colorSet.base};
`;

const ProjectsSection = styled(FlexBox)`
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: ${colorSet.base};
  box-sizing: border-box;
  opacity: ${(props) => props.visibility};
  transform: ${(props) => `scale(${props.visibility})`};
  transition: opacity 1s ease-in-out, transform 0.4s ease-in-out;
`;

const DetailSection = styled(FlexBox)`
  width: 100%;
`;

const EmptySeparator = styled.div`
  width: 100%;
  padding-top: 500px;
  background-color: ${colorSet.base};
  position: relative;
`;

const rotateText = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: ${colorSet.accent};
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    animation: ${rotateText} 2s linear infinite;
  }
`;

const RotatingSection = styled.section`
  position: absolute;
  animation: ${rotateText} 10.5s linear infinite;
`;

const Letter = styled.span`
  position: absolute;
  font-family: Poppins;
  top: -35px;

  font-size: 10px;
  display: inline-block;
  color: white;
  transform-origin: 0 35px;
  transform: ${({ index }) => `rotate(${index * 14.5}deg)`};
`;

const projectsData = [
  {
    id: 0,
    category: "side",
    title: "Cookie or Death",
    date: "2021.08 - 2021.09",
    subtitle:
      "쿠키를 좋아하는 외계인이 지구에 와서 소통하기 위한 영어 - 외계어 번역기",
    description: [
      "데이터 통신 과목에서 1:1 암호화를 배우고 영감을 받아 만든 웹사이트",
      "프레임워크 없이 VanilaJS로만 구현",
      "1人 기획, 디자인, 개발",
      "최초 웹사이트 개발",
    ],
    technologies: ["VanilaJS", "Parcel", "Github Pages"],
    link: "https://nwewave32.github.io/cookie_or_death/",
    thumbnail: "cookie_or_death/cookie1.png",
    images: [
      "cookie_or_death/cookie1.png",
      "cookie_or_death/cookie2.png",
      "cookie_or_death/cookie3.png",
      "cookie_or_death/cookie4.png",
    ],
  },
  {
    id: 1,
    category: "side",
    title: "nicknamemaker",
    date: "2023.01 - 03 -> 2024.08 - 10",
    subtitle: "윈도우95 컨셉의 이름 짓기 웹사이트",
    description: [
      "레트로 감성의 웹사이트를 개발하여 상태 관리와 효율적인 UX를 제공",
      "Recoil을 활용하여 전역 상태 관리",
      "재사용 가능한 컴포넌트 설계",
      "1人 기획, 디자인(Figma경험), 개발",
    ],
    technologies: [
      "React Native & TypeScript -> React.js",
      "Styled-components",
      "Recoil",
      "Figma",
    ],
    link: "https://nwewave32.github.io/nicknamemaker/",
    thumbnail: "nicknamemaker/nicknamemaker3.png",
    images: [
      "nicknamemaker/nicknamemaker1.png",
      "nicknamemaker/nicknamemaker2.png",
      "nicknamemaker/nicknamemaker3.png",
      "nicknamemaker/nicknamemaker4.png",
      "nicknamemaker/nicknamemaker5.png",
      "nicknamemaker/nicknamemaker6.png",
    ],
  },
  {
    id: 2,
    category: "side",
    title: "필라테스 예약 매크로",
    date: "2023.12 - 2023.12",
    subtitle: "필라테스 센터에 자동으로 빠르게 예약해주는 매크로",
    description: [
      "티켓팅을 능가하는 어려움을 매크로로 해소",
      "매크로 실행 중 발생할 수 있는 다양한 예외 상황을 처리하기 위한 에러 핸들링",
    ],
    technologies: ["Python", "selenium"],
    thumbnail: "pilates/pilates_thumb.png",
    images: ["pilates/pilates1.png"],
  },
  {
    id: 3,
    category: "side",
    title: "포트폴리오 웹사이트",
    date: "2024.10 - ",
    description: [
      "내 포트폴리오를 전시하는 웹사이트를 제작하여 인터랙티브한 사용자 경험과 반응형 디자인을 구현",
      "최신 React 기술과 styled-components를 사용하여 개발",
    ],
    technologies: [
      "React",
      "Styled-components",
      "React Router",
      "Framer Motion",
    ],
    link: "https://nwewave32.github.io/portfolio/",
  },
  {
    id: 4,
    category: "corp",
    title: "ThinQ",
    date: "2022.01 - 2024.04",
    subtitle: "LG 전자의 IoT 제품 전용 어플리케이션 ",
    description: [
      "5개 이상의 제품에서 React.js 프레임워크 이용한 개발 및 유지보수 작업",
      "디자이너, 백엔드 개발자, PM 등 다양한 팀원들과의 원활한 협업",
      "RESTful API 연동 및 상태 관리(Recoil) 구현",
      "단위 테스트, 통합 테스트 등의 테스팅 경험과 버전 관리 경험(CI/CD 경험)",
      "이미지 분할 로드로 다중 이미지 로드에 5초 이상 걸리던 초기 로딩 시간을 1초로 단축",
      "웹 접근성 최적화",
    ],
    technologies: [
      "React.js",
      "Styled-components",
      "Recoil",
      "Zeplin",
      "Mixpanel",
      "Git",
    ],
    link: "https://www.lge.co.kr/lg-thinq",
    thumbnail: "thinq/thinq_logo.png",
    images: [
      "thinq/thinq_thumb.png",
      "thinq/thinq.png",
      "thinq/hb.png",
      "thinq/wm.png",
      "thinq/dw.png",
      "thinq/sc.png",
    ],
  },

  {
    id: 5,
    category: "corp",
    title: "나코차(나의 코치를 찾아줘)",
    date: "2023.05 - 2023.09",
    subtitle: "스포츠 코치 매칭 플랫폼 ",
    description: [
      "외부 개발자와 협업",
      "GetX, Bloc, Provider를 이용해 상태 관리와 효율적인 UX를 제공",
      "RESTful API 연동 및 상태 관리(GetX) 구현",
      "3명의 개발자와 CI 경험",
    ],

    technologies: ["Dart", "Flutter", "GetX", "Postman", "Firebase"],
    link: "https://nacocha.com/",
    thumbnail: "nacocha/nacocha.png",
    images: [
      "nacocha/nacocha.png",
      "nacocha/nacocha1.png",
      "nacocha/nacocha2.png",
      "nacocha/nacocha3.png",
    ],
  },
  {
    id: 6,
    category: "corp",
    title: "RentVe",
    date: "2023.10 - 2024.04",
    subtitle: "렌트카 업체 CMS ",
    description: [
      "담당 프로젝트",
      "1人 기획, 개발(프론트와 백 동시에 개발)",
      "직관적인 UI/UX와 API 연동을 통해 관리자의 업무 효율을 높임",
      "Tailwind CSS를 활용하여 별도의 CSS 파일 없이 스타일링",
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "Vuex", "MySQL", "TailwindCSS"],
    link: "https://amuz.co.kr/service",
    thumbnail: "rentve/rentve.png",
    images: ["rentve/rentve.png"],
  },
];

const Projects = () => {
  const [visibility, setVisibility] = useState(1);
  const sectionRef = useRef(null);
  const [topBtnVisibility, setTopBtnVisibility] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => setIsVisible(entry.isIntersecting),
  //     { threshold: 0.6 } // Adjust threshold as needed
  //   );

  //   if (sectionRef.current) observer.observe(sectionRef.current);
  //   return () => {
  //     if (sectionRef.current) observer.unobserve(sectionRef.current);
  //   };
  // }, []);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  useEffect(() => {
    const detailSection = document.body.querySelector("#detail");

    if (detailSection) {
      const offset = detailSection.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }

    const handleScroll = () => {
      if (window.scrollY > window.outerHeight / 4)
        setVisibility(1 - window.scrollY / window.outerHeight);
      else setVisibility(1);

      if (window.scrollY > window.outerHeight / 3) setTopBtnVisibility(true);
      else setTopBtnVisibility(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedProjectIndex]);

  const text = "back to top";

  const letters = text.split("");

  return (
    <ProjectContainer direction="column" align="center" ref={sectionRef}>
      <ProjectsSection justify="center" visibility={visibility} id="project">
        <GridProjecet
          clickProject={(index) => {
            setSelectedProjectIndex(index);
          }}
        />
      </ProjectsSection>

      <EmptySeparator>
        <WavySeparator color={colorSet.background} />
      </EmptySeparator>
      {selectedProjectIndex !== null && (
        <DetailSection id="detail">
          <DetailLayout project={projectsData[selectedProjectIndex]} />
        </DetailSection>
      )}

      {topBtnVisibility && (
        <BackToTopButton onClick={scrollToTop}>
          <RotatingSection>
            {letters.map((item, index) => (
              <Letter key={index} index={index}>
                {item}
              </Letter>
            ))}
          </RotatingSection>
        </BackToTopButton>
      )}
    </ProjectContainer>
  );
};

export default Projects;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Column = styled(FlexBox)`
  flex: 1;
`;

const TopGradientSeparator = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;

  background: linear-gradient(${colorSet.background}, transparent);
`;

const BottomGradientSeparator = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  background: linear-gradient(transparent, ${colorSet.background});
`;

const GridProjecet = ({ clickProject }) => {
  const startTrack = useSelector((state) => state.track.value);

  return (
    <GridContainer>
      {Array.from({ length: 4 }).map((_, columnIndex) => {
        return (
          <Column key={columnIndex} direction="column">
            <InfiniteAutoSlider
              projects={projectsData}
              isUp={columnIndex % 2 === 0}
              clickProject={clickProject}
              columnIndex={columnIndex}
              startToMove={startTrack}
            />
          </Column>
        );
      })}
    </GridContainer>
  );
};
