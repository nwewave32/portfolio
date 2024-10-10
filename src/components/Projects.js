import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";
import { Technology, TechnologiesUsed } from "./GlobalStyles";

const ProjectsSection = styled.section`
  padding: 50px;
  background-color: #ffffff;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;
const ProjectDate = styled.div`
  color: #6e7275;
  margin-bottom: 15px;
`;

const ProjectSubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const projectsData = [
  {
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
    technologies: ["VanilaJS", "Parcel"],
  },
  {
    title: "ThinQ App",
    date: "2022.01 - 2024.04",
    subtitle: "LG 전자의 IoT 제품 전용 어플리케이션 / 회사 프로젝트",
    description: [
      "5개 이상의 제품에서 개발 및 유지보수 작업",
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
    ],
  },
  {
    title: "nicknamemaker",
    date: "2023.01 - 03 -> 2024.08 - 10",
    subtitle: "윈도우95 컨셉의 이름 짓기 웹사이트",
    description: [
      "레트로 감성의 웹사이트를 개발하여 상태 관리와 효율적인 UX를 제공",
      "Recoil을 활용하여 전역 상태 관리",
      "재사용 가능한 컴포넌트 설계",
      "1人 기획, 디자인, 개발",
    ],
    technologies: [
      "React Native & TypeScript -> React.js",
      "Styled-components",
      "Recoil",
      "Figma",
    ],
  },
  {
    title: "나코차(나의 코치를 찾아줘)",
    date: "2023.05 - 2023.09",
    subtitle: "스포츠 코치 매칭 플랫폼 / 회사 프로젝트",
    description: [
      "외부 백엔드 개발자와 협업",
      "간단한 ToDo 리스트 앱을 개발하여 상태 관리와 효율적인 UX를 제공했습니다. Drag-and-drop 기능을 통해 사용자 편의성을 높였습니다. 실시간으로 데이터를 시각화하고 분석할 수 있는 대시보드를 개발했습니다.반응형 커머스 웹사이트를 개발하여 다양한 디바이스에서 최적화된 사용자 경험을 제공했습니다. SEO 최적화 및 성능 개선을 위한 작업도 포함되었습니다. 사용자를 관리하고 고객 데이터를 처리할 수 있는 웹 애플리케이션을 개발했습니다. 직관적인 UI/UX와 API 연동을 통해 관리자의 업무 효율을 높였습니다.사용자 친화적인 인터페이스와 성능 최적화를 통해 신속한 데이터 분석을 지원했습니다.",
    ],

    technologies: ["Flutter", "GetX", "Postman", "Firebase"],
  },
  {
    title: "RentVe",
    date: "2023.10 - 2024.04",
    subtitle: "렌트카 업체 CMS / 회사 프로젝트",
    description: ["직관적인 UI/UX와 API 연동을 통해 관리자의 업무 효율을 높임"],
    technologies: ["Laravel", "Vue.js", "Vuex", "MySQL", "TailwindCSS"],
  },

  {
    title: "필라테스 예약 매크로",
    date: "2023.12 - 2023.12",
    subtitle: "필라테스 센터에 자동으로 빠르게 예약해주는 매크로",
    description: [""],
    technologies: ["Python"],
  },
  {
    title: "포트폴리오 웹사이트",
    date: "2024.10 - ",
    description: [
      "내 포트폴리오를 전시하는 웹사이트를 제작하여 인터랙티브한 사용자 경험과 반응형 디자인을 구현했습니다. 최신 React 기술과 styled-components를 사용하여 개발하였습니다.",
    ],
    technologies: [
      "React",
      "Styled-components",
      "React Router",
      "Framer Motion",
    ],
  },
];

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <ProjectsSection>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            onClick={() => handleProjectClick(index)}
            ref={ref1}
            style={{
              opacity: inView1 ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDate>{project.date}</ProjectDate>
            <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
            <TechnologiesUsed>
              {project.technologies.map((tech, techIndex) => (
                <Technology key={techIndex}>{tech}</Technology>
              ))}
            </TechnologiesUsed>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {isModalOpen && (
        <Modal
          project={projectsData[selectedProjectIndex]}
          onClose={() => setIsModalOpen(false)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </ProjectsSection>
  );
};

export default Projects;
