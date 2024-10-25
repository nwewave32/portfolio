import React, { useEffect, useLayoutEffect, useState, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";

const FullContainer = styled(FlexBox)`
  width: 100%;
  height: 100vh;
  background-color: ${colorSet.background};
`;

const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  min-height: 300px;
  padding: 80px 0 30px 0;
`;

const ProjectTitle = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ProjectSubTitle = styled(FlexBox)`
  width: 100%;
  margin-bottom: 10px;
`;

const KeyBox = styled.div`
  margin-right: 10px;
`;

const ValueBox = styled.div``;

const ProjectDescription = styled(FlexBox)`
  margin-bottom: 20px;
  height: 800px;
  background-color: pink;
`;

const ProjectDesc = styled.li`
  list-style: circle;
  margin-bottom: 5px;
`;

const ImageContainer = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["imgUrl"].includes(prop),
})`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;

  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  transition: #bbb 0.6s ease;
`;

const ContentContainer = styled(FlexBox)`
  padding: 24px 50px;
  width: 80%;
`;

const ButtonContainer = styled(FlexBox)`
  cursor: pointer;
  padding: 0 20px;
  height: 100%;
`;

const LinkBtn = styled(FlexBox)`
  position: relative;
  height: fit-content;
  padding: 10px;
  border-radius: 8px;
  line-height: 24px;
  word-break: keep-all;
  cursor: pointer;
  color: #000;
  background-color: transparent;
`;
const hover = () => keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const waveAnimation = ({ isHovered }) => {
  return isHovered ? `animation: ${hover} 2s;` : "";
};

const BtnWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  border-radius: 30px;
  background-color: ${colorSet.accent};
  width: 100%;
  height: 0%;
  transform: ${(props) =>
    props.isHovered ? "translateY(100%)" : "translateY(0%)"};
  transition: transform 2s ease-in-out;
`;

const BtnImg = styled.img.withConfig({
  shouldForwardProp: (prop) => !["isHover"].includes(prop),
})`
  opacity: ${(props) => (props.isHover ? "0.4" : "0")};
`;

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
  useEffect(() => {
    console.log("##isHovered", isHovered);
  }, [isHovered]);
  const handleClickPrev = () => {
    setImgIdx((prev) => (prev === 0 ? project.length - 1 : prev - 1));
  };

  const handleClickNext = () => {
    setImgIdx((prev) => (prev === project.length - 1 ? 0 : prev + 1));
  };

  const titleSection = [
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

  const handleMouseEvent = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <FullContainer justify="center">
      <ContentContainer
        direction="column"
        justify="space-between"
        align="center"
      >
        <TitleSection>
          <ProjectTitle>{project.title}</ProjectTitle>
          <div style={{ width: "100%" }}>
            {titleSection.map((item) => (
              <ProjectSubTitle justify="space-between">
                <KeyBox>{item.key} </KeyBox>
                <ValueBox>{item.value}</ValueBox>
              </ProjectSubTitle>
            ))}
          </div>
          {project?.link && (
            <LinkBtn
              onClick={() => {
                window.open(project.link, "_blank", "noopener, noreferrer");
              }}
              onMouseEnter={handleMouseEvent}
              // onMouseLeave={handleMouseEvent}
              isHovered={isHovered}
            >
              Visit site
              <BtnWave isHovered={isHovered} />
            </LinkBtn>
          )}
        </TitleSection>
        {project?.images && (
          <Fade key={imgIdx}>
            <ImageContainer
              justify="space-between"
              imgUrl={project.images[imgIdx]}
            >
              <PrevButton onClick={handleClickPrev} />
              <NextButton onClick={handleClickNext} />
            </ImageContainer>
          </Fade>
        )}
        <ProjectDescription direction="column" align="flex-start">
          {project.description.map((desc, idx) => {
            return <ProjectDesc key={idx + desc}>{desc}</ProjectDesc>;
          })}
        </ProjectDescription>

        <FlexBox justify="space-between">
          <TechnologiesUsed>
            {project.technologies.map((tech, index) => (
              <Technology key={index}>{tech}</Technology>
            ))}
          </TechnologiesUsed>
        </FlexBox>
      </ContentContainer>
    </FullContainer>
  );
};

export default DetailLayout;
