import React, {
  useEffect,
  useLayoutEffect,
  useState,
  Fragment,
  useRef,
} from "react";
import styled, { keyframes } from "styled-components";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";

const FullContainer = styled(FlexBox)`
  width: 100%;

  background-color: ${colorSet.background};
`;

const TitleSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !["scrollY"].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  height: 50%;
  padding: 100px 0 30px 0;

  margin-bottom: 20px;

  position: sticky;
  top: 0px;
`;
// will-change: transform;
// transform: translateY(-${(props) => props.scrollY}px);

const ProjectTitle = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ProjectSubTitle = styled(FlexBox)`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const KeyBox = styled.div`
  margin-right: 10px;
`;

const ValueBox = styled.div``;

const DescriptionSection = styled.section`
  width: 64vw;
  margin-top: 20px;
`;
const ProjectDescription = styled(FlexBox)`
  margin-bottom: 20px;
  list-style-image: none | url("checked.png");
`;

const ProjectDesc = styled.li`
  margin-bottom: 5px;
`;

const ImageSection = styled.section`
  background-color: ${colorSet.background};
  width: 80vw;
  margin-bottom: 500px;
`;

const ImageContainer = styled(FlexBox)`
  will-change: transform;
  transform: perspective(1200px);
`;

const ImageBox = styled.div`
  margin-bottom: 300px;

  position: sticky;
  top: 120px;
  height: 100%;
  background-color: ${colorSet.background};
`;

const EmptySeparator = styled.div`
  height: 500px;
  width: 100%;
  background-color: pink;
`;

const ContentContainer = styled(FlexBox)`
  padding: 24px 50px;
  width: 80%;
`;

const ButtonContainer = styled(FlexBox)`
  cursor: pointer;
  padding: 0 20px;
`;

const ButtonsLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => !["btnLeng"].includes(prop),
})`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$btnLeng}, 1fr);
  column-gap: 10px;
`;

const LinkBtn = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  max-width: 135px;
  flex-wrap: nowrap;
  text-align: center;
  position: relative;
  z-index: 3;
  padding: 10px;
  line-height: 24px;
  word-break: keep-all;
  cursor: pointer;
  border: 2px solid ${colorSet.base};
  border-radius: 10px;
  will-change: color;
  color: ${(props) => (props.isHovered ? colorSet.text : colorSet.base)};
  font-weight: 500;
  background-color: transparent;
  overflow: hidden;
  transition: color 1.2s ease-in-out;
`;

const BtnWave = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  position: absolute;
  will-change: bottom;
  bottom: ${(props) => (props.isHovered ? "0px" : "-100%")};
  left: 0;
  opacity: 0.4;
  transform: ${(props) =>
    props.isHovered ? "translateX(-20px)" : " translateX(0px)"};
  width: 100%;
  height: 100%;
  transition: bottom 1.2s ease-in-out, transform 5.2s ease-in-out;
`;

const Arrow = styled.img.withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  position: absolute;
  right: 5px;
  bottom: ${(props) => (props.isHovered ? "10px" : "-100%")};
  padding: 2px;
  width: 18px;
  height: 18px;
  transform: rotate(-125deg);
  transition: color 1.2s ease-in-out, bottom 1s ease-in;
`;

const BtnImg = styled.img.withConfig({
  shouldForwardProp: (prop) => !["isHover"].includes(prop),
})`
  will-change: opacity;
  opacity: ${(props) => (props.isHover ? "0.4" : "0")};
`;

const StyledSvg = styled.svg.attrs((props) => ({}))`
  width: 200px;
`;

// Usage
<StyledSvg fill="#000" transform="rotate(45deg)" />;

const NextButton = ({ onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <ButtonContainer
      onClick={onClick}
      align="center"
      onMouseEnter={() => setIsHover((prev) => !prev)}
      onMouseLeave={() => setIsHover((prev) => !prev)}
    >
      <BtnImg
        src="next.png"
        width={24}
        height={24}
        alt="next"
        isHover={isHover}
      />
    </ButtonContainer>
  );
};

const PrevButton = ({ onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <ButtonContainer
      onClick={onClick}
      align="center"
      onMouseEnter={() => setIsHover((prev) => !prev)}
      onMouseLeave={() => setIsHover((prev) => !prev)}
    >
      <BtnImg
        src="prev.png"
        width={24}
        height={24}
        alt="prev"
        isHover={isHover}
      />
    </ButtonContainer>
  );
};

const DetailLayout = ({ project }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredType, setHoveredType] = useState("");

  const handleClickPrev = () => {
    setImgIdx((prev) => (prev === 0 ? project.length - 1 : prev - 1));
  };

  const handleClickNext = () => {
    setImgIdx((prev) => (prev === project.length - 1 ? 0 : prev + 1));
  };

  const titleSectionArr = [
    {
      key: "Subtitle:",
      value: project.subtitle,
    },
    {
      key: "Category:",
      value: project.category === "corp" ? "회사 프로젝트" : "개인 프로젝트",
    },
    {
      key: "Duration:",
      value: project.date,
    },
  ];

  const handleMouseEvent = (type) => {
    setIsHovered((prev) => !prev);
    setHoveredType(type);
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleSection = useRef();

  return (
    <FullContainer justify="center">
      <ContentContainer
        direction="column"
        justify="space-between"
        align="center"
      >
        <TitleSection
          ref={titleSection}
          scrollY={() => {
            if (
              titleSection.current &&
              titleSection.current?.offsetTop <= scrollY
            ) {
              const result =
                (scrollY - titleSection.current.clientHeight) /
                  titleSection.current.clientHeight +
                100;

              return result;
            }
            return 0;
          }}
          id="title"
        >
          <ProjectTitle>{project.title}</ProjectTitle>
          <div style={{ width: "100%" }}>
            {titleSectionArr.map((item) => (
              <ProjectSubTitle justify="space-between" key={item.key}>
                <KeyBox>{item.key} </KeyBox>
                <ValueBox>{item.value}</ValueBox>
              </ProjectSubTitle>
            ))}
          </div>
          {project?.buttons && (
            <ButtonsLayout
              $btnLeng={project?.buttons ? project?.buttons.length : 0}
            >
              {project?.buttons.map((button) => {
                return (
                  <LinkBtn
                    key={button.type}
                    onClick={() => {
                      window.open(button.url, "_blank", "noopener, noreferrer");
                    }}
                    onMouseEnter={() => handleMouseEvent(button.type)}
                    onMouseLeave={() => handleMouseEvent(button.type)}
                    isHovered={isHovered && hoveredType === button.type}
                  >
                    {button.title}
                    <BtnWave
                      isHovered={isHovered && hoveredType === button.type}
                    >
                      <StyledSvg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2400 1020"
                      >
                        <path
                          d="M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z"
                          fill={colorSet.accent}
                        ></path>
                      </StyledSvg>
                    </BtnWave>
                    {project?.buttons.length === 2 &&
                      button.type === "link" && (
                        <Arrow
                          src="arrow.png"
                          alt="go"
                          isHovered={isHovered && hoveredType === button.type}
                        />
                      )}
                  </LinkBtn>
                );
              })}
            </ButtonsLayout>
          )}
        </TitleSection>
        <ImageSection>
          {project?.images && (
            <Fade key={imgIdx}>
              <ImageContainer direction="column">
                {project.images.map((image, idx) => {
                  return (
                    <ImageBox key={`img-${idx}`}>
                      <img src={image} width="100%" alt={image} />
                    </ImageBox>
                  );
                })}
              </ImageContainer>
            </Fade>
          )}
        </ImageSection>

        <DescriptionSection>
          <Fade>
            <ProjectDescription direction="column" align="flex-start">
              {project.description.map((desc, idx) => {
                return <ProjectDesc key={idx + desc}>{desc}</ProjectDesc>;
              })}
            </ProjectDescription>

            <FlexBox justify="space-between">
              <TechnologiesUsed>
                {project.technologies.map((tech) => (
                  <Technology key={tech}>{tech}</Technology>
                ))}
              </TechnologiesUsed>
            </FlexBox>
          </Fade>
        </DescriptionSection>
      </ContentContainer>
    </FullContainer>
  );
};

export default DetailLayout;
