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
import { breakpoints } from "lib/globalData";
import CustomButton from "./CustomButton";

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
  height: 50%;
  padding: 100px 0 30px 0;

  margin-bottom: 20px;

  position: sticky;
  top: 0px;

  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
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
  font-size: 5em;
  font-weight: 400;
  line-height: 1;
  height: max-content;
  /* Mobile 이하 */
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 2em;
  }
  /* Tablet - Portrait 이상 */
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    font-size: 3em;
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

const EmptySeparator = styled.div`
  height: 500px;
  width: 100%;
  background-color: pink;
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

const LinkBtn = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  max-width: 135px;
  flex-wrap: nowrap;
  text-align: center;
  position: relative;

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

const DetailLayout = ({ project }) => {
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
    </FullContainer>
  );
};

export default DetailLayout;
