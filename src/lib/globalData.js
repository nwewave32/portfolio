export const breakpoints = {
  mobile: 576,
  tabletPortrait: 768,
  tabletLandscape: 992,
  laptop: 1200,
  imac: 3000,
};

export const projectsData = [
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
    buttons: [
      {
        id: 0,
        type: "link",
        url: "https://nwewave32.github.io/cookie_or_death/",
        title: "Visit Site",
      },
    ],

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
    buttons: [
      {
        id: 0,
        type: "link",
        url: "https://nwewave32.github.io/nicknamemaker/",
        title: "Visit Site",
      },
    ],

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
    date: "2024.10 - 2024.11",
    subtitle: "포트폴리오 전시 사이트",
    description: [
      "내 포트폴리오를 전시하는 웹사이트를 제작하여 인터랙티브한 사용자 경험과 반응형 디자인을 구현",
      "최신 React 기술과 styled-components를 사용하여 개발",
    ],
    technologies: [
      "React",
      "Styled-components",
      "React Router",
      "Framer Motion",
      "Figma",
      "Redux",
    ],
    thumbnail: "portfolio/portfolio_main.png",
    images: [
      "portfolio/portfolio_main.png",
      "portfolio/portfolio1.png",
      "portfolio/portfolio2.png",
      "portfolio/portfolio3.png",
      "portfolio/portfolio4.png",
    ],
    buttons: [
      {
        id: 0,
        type: "link",
        url: "https://nwewave32.github.io/portfolio/",
        title: "Visit Site",
      },
    ],
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

    thumbnail: "thinq/thinq_logo.png",
    images: [
      "thinq/thinq_thumb.png",
      "thinq/thinq.png",
      "thinq/hb.png",
      "thinq/wm.png",
      "thinq/dw.png",
      "thinq/sc.png",
    ],

    buttons: [
      {
        id: 0,
        type: "link",
        url: "https://www.lge.co.kr/lg-thinq",
        title: "Visit Site",
      },
      {
        id: 1,
        type: "download",
        url: "https://play.google.com/store/apps/details?id=com.lgeha.nuts&hl=ko",
        title: "Download App",
      },
    ],
  },

  {
    id: 5,
    category: "corp",
    title: "나코차 (나의 코치를 찾아줘)",
    date: "2023.05 - 2023.09",
    subtitle: "스포츠 코치 매칭 플랫폼 ",
    description: [
      "외부 개발자와 협업",
      "GetX, Bloc, Provider를 이용해 상태 관리와 효율적인 UX를 제공",
      "RESTful API 연동 및 상태 관리(GetX) 구현",
      "3명의 개발자와 CI 경험",
    ],

    technologies: ["Dart", "Flutter", "GetX", "Postman", "Firebase"],

    thumbnail: "nacocha/nacocha.png",
    images: [
      "nacocha/nacocha.png",
      "nacocha/nacocha1.png",
      "nacocha/nacocha2.png",
      "nacocha/nacocha3.png",
    ],

    buttons: [
      {
        id: 0,
        type: "link",
        url: "https://nacocha.com/",
        title: "Visit Site",
      },
      {
        id: 1,
        type: "download",
        url: "https://play.google.com/store/apps/details?id=com.nacocha.nacocha_v1&hl=gsw&gl=KR",
        title: "Download App",
      },
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

    buttons: [
      {
        id: 0,
        type: "link",
        url: "https://amuz.co.kr/service",
        title: "Visit Site",
      },
    ],

    thumbnail: "rentve/rentve.png",
    images: ["rentve/rentve.png"],
  },
];

export const skills = [
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
