import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import WavySeparator from "./WavySeparator";
import DetailLayout from "./DetailLayout";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { Fade } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";

const ProjectContainer = styled(FlexBox)`
  width: 100%;
  box-sizing: border-box;
`;

const ProjectsSection = styled.div`
  padding: 50px;
  width: 80%;
  height: 100vh;
`;

const DetailSection = styled(FlexBox)`
  padding: 0 50px;
  width: 100%;
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
    title: "ThinQ App",
    date: "2022.01 - 2024.04",
    subtitle: "LG 전자의 IoT 제품 전용 어플리케이션 / 회사 프로젝트",
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
    thumbnail: "thinq/thinq_thumb.png",
    images: [
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
    subtitle: "스포츠 코치 매칭 플랫폼 / 회사 프로젝트",
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
    subtitle: "렌트카 업체 CMS / 회사 프로젝트",
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
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  useEffect(() => {
    console.log("##selectedProjectIndex", selectedProjectIndex);
    const detailSection = document.body.querySelector("#detail");
    if (detailSection) {
      const offset = detailSection.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }, [selectedProjectIndex]);

  return (
    <ProjectContainer direction="column" align="center">
      <ProjectsSection>
        <GridProjecet
          clickProject={(index) => {
            setSelectedProjectIndex(index);
          }}
        />
      </ProjectsSection>
      <WavySeparator />
      {selectedProjectIndex !== null && (
        <DetailSection id="detail">
          <DetailLayout project={projectsData[selectedProjectIndex]} />
        </DetailSection>
      )}
    </ProjectContainer>
  );
};

export default Projects;

const GridContainer = styled(FlexBox)`
  width: 100%;
  height: 100%;
  padding: 20px;

  box-sizing: border-box;
`;
const TitleSection = styled(FlexBox)`
  flex: 2;
  height: 100%;
`;
const TitleText = styled.h2``;
const GridSection = styled(FlexBox)`
  flex: 8;
  height: 100%;
`;
const GridLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => !["gridLeng"].includes(prop),
})`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridLeng}, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-height: 500px;
`;
const ProjectItem = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["radius"].includes(prop),
})`
  border: 1px solid ${colorSet.base};
  border-radius: ${(props) => props.radius};
  border-right: none;
  min-height: 200px;
  padding: 20px;
  &:hover {
    background-color: ${colorSet.base};
    color: #fff;
  }

  &:nth-child(-n + 4) {
    border-bottom: none;
  }
  &:nth-last-of-type(5n) {
    border-right: 1px solid ${colorSet.base};
  }
  &:last-child {
    border-right: 1px solid ${colorSet.base};
  }
`;

const TmpDiv = styled.div`
  width: 14.28%;
  height: 100px;
  background-color: ${(props) => props.color};
`;

const GridProjecet = ({ clickProject }) => {
  return (
    <>
      <GridContainer>
        <TitleSection>
          <TitleText>Works</TitleText>
        </TitleSection>
        <GridSection>
          <GridLayout gridLeng={Math.ceil(projectsData.length / 2)}>
            <div></div>
            {projectsData.map((project, idx) => {
              let radius = 0;
              if (idx === 0) radius = "15px 0 0 0";
              else if (idx === projectsData.length - 1) radius = " 0 0 15px 0";
              else if (idx === Math.floor(projectsData.length / 2))
                radius = "15px 0 0 15px";
              else if (idx === Math.floor(projectsData.length / 2) - 1)
                radius = "0 15px 0 0";

              return (
                <ProjectItem
                  key={project.id}
                  align="flex-end"
                  radius={radius}
                  onClick={() => clickProject(project.id)}
                >
                  {project.title}
                </ProjectItem>
              );
            })}
          </GridLayout>
        </GridSection>
      </GridContainer>
      <FlexBox style={{ width: "100%" }}>
        {Object.keys(colorSet).map((item) => {
          return <TmpDiv color={colorSet[item]} />;
        })}
      </FlexBox>
    </>
  );
};
