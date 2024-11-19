import React, {
  useEffect,
  useLayoutEffect,
  useState,
  Fragment,
  useRef,
} from "react";
import styled, { keyframes } from "styled-components";
import { Technology, TechnologiesUsed, FlexBox } from "components/GlobalStyles";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";
import { breakpoints, projectsData } from "lib/globalData";
import CustomButton from "components/CustomButton";
import WavyText from "components/WavyText";
import { useDispatch } from "react-redux";
import { setSelectedProjectId } from "features/global";

const FullContainer = styled(FlexBox)`
  width: 100%;
  background-color: ${colorSet.background};
`;

const ContentContainer = styled(FlexBox)`
  padding: 24px 50px;
  width: 80%;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;

    padding: 18px;
  }

  /* Tablet - Portrait 이상 */
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    width: 100%;
  }
`;

const TitleSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !["scrollY"].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  height: 40vh;
  padding: 100px 0 30px 0;

  margin-bottom: 20px;

  position: sticky;
  top: 0px;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
  @media (min-width: ${breakpoints.imac}px) {
    background-color: pink;
  }
`;
// will-change: transform;
// transform: translateY(-${(props) => props.scrollY}px);
const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-weight: 400;
  line-height: 1;
  height: max-content;
  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    // font-size: 2em;
  }
  /* Tablet - Portrait 이상 */
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    // font-size: 3em;
  }
`;

const SubTitleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
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
  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
    padding: 0 18px;
  }
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
  /* Tablet - Portrait 이상 */
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    width: 90vw;
  }
  @media (min-width: ${breakpoints.imac}px) {
    margin-bottom: 100vh;
  }
`;

const ImageContainer = styled(FlexBox)`
  will-change: transform;
  transform: perspective(1200px);
`;

const ImageBox = styled.div`
  margin-bottom: 300px;

  position: sticky;
  top: 100px;
  height: 100%;
  min-height: 500px;
  background-color: ${colorSet.background};
  opacity: 1;
`;

const ButtonContainer = styled(FlexBox)`
  cursor: pointer;
  padding: 0 20px;
`;

const ButtonsLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => !["btnLeng"].includes(prop),
})`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$btnLeng}, 1fr);
  column-gap: 10px;
`;

const StyledButton = styled.div`
  font-size: 3vh;
  color: ${colorSet.highlight};

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.8vh;
  }
`;

const DetailLayout = ({ project }) => {
  const projectId = project.id;
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
  const PREV = "prev";
  const NEXT = "next";
  const getProjectId = (type) => {
    if (type === PREV)
      return projectId - 1 < 0 ? projectsData.length - 1 : projectId - 1;
    else return projectId + 1 > projectsData.length - 1 ? 0 : projectId + 1;
  };

  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(setSelectedProjectId(index));
    // window.location.reload();
  };
  return (
    <FullContainer align="center" direction="column">
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
          <TitleContainer>
            <ProjectTitle>{project.title}</ProjectTitle>
          </TitleContainer>

          <SubTitleContainer>
            {titleSectionArr.map((item) => (
              <ProjectSubTitle justify="space-between" key={item.key}>
                <KeyBox>{item.key} </KeyBox>
                <ValueBox>{item.value}</ValueBox>
              </ProjectSubTitle>
            ))}
          </SubTitleContainer>
          {project?.buttons && (
            <ButtonsLayout
              $btnLeng={project?.buttons ? project?.buttons.length : 0}
            >
              {project?.buttons.map((button, idx) => {
                return <CustomButton key={"key" + idx} button={button} />;
              })}
            </ButtonsLayout>
          )}
        </TitleSection>
        <ImageSection>
          {project?.images && (
            <Fade>
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
      <ButtonContainer
        style={{
          width: "100%",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
        justify="space-around"
      >
        <StyledButton onClick={() => handleClick(getProjectId(PREV))}>
          {projectsData[getProjectId(PREV)].title}
        </StyledButton>
        <StyledButton onClick={() => handleClick(getProjectId(NEXT))}>
          {projectsData[getProjectId(NEXT)].title}
        </StyledButton>
      </ButtonContainer>
    </FullContainer>
  );
};

export default DetailLayout;
