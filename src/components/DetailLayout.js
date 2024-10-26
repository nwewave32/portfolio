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
  height: 50%;
  padding: 100px 0 30px 0;
  background-color: pink;
  margin-bottom: 20px;
`;

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

const ProjectDescription = styled(FlexBox)`
  margin-bottom: 20px;
`;

const ProjectDesc = styled.li`
  margin-bottom: 5px;
`;

const ImageSection = styled.section``;

const ImageContainer = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["imgUrl"].includes(prop),
})`
  width: 80vw;
  height: 700px;
  background-color: pink;
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
`;

const LinkBtn = styled(FlexBox)`
  position: relative;
  padding: 10px;
  line-height: 24px;
  word-break: keep-all;
  cursor: pointer;
  border: 2px solid ${colorSet.base};
  border-radius: 10px;
  color: ${(props) => (props.isHovered ? colorSet.text : colorSet.base)};
  font-weight: 500;
  background-color: transparent;
  overflow: hidden;
  transition: color 1.2s ease-in-out;
`;

const BtnWave = styled.div`
  position: absolute;
  bottom: ${(props) => (props.isHovered ? "0px" : "-100%")};
  left: 0;
  opacity: 0.4;

  width: 100%;
  height: 100%;

  transition: bottom 1.2s ease-in-out;
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
              onMouseLeave={handleMouseEvent}
              isHovered={isHovered}
            >
              Visit site
              <BtnWave isHovered={isHovered}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%" }}
                  viewBox="0 0 1400 1020"
                >
                  <path
                    d="M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z"
                    fill={colorSet.accent}
                  ></path>
                </svg>
              </BtnWave>
            </LinkBtn>
          )}
        </TitleSection>
        <ImageSection>
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
        </ImageSection>

        {/* 
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
        </FlexBox> */}
      </ContentContainer>
    </FullContainer>
  );
};

export default DetailLayout;
