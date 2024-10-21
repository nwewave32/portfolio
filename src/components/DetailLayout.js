import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";

const FullContainer = styled(FlexBox)`
  padding: 50px;
  width: 80%;
  height: 100vh;
`;
const ModalTitle = styled.h2`
  font-size: 5rem;
  margin: 10px 0;
  font-weight: 500;
`;

const ModalDescription = styled(FlexBox)`
  color: #050505;
  margin-bottom: 20px;
`;

const ProjectDate = styled.div`
  color: #6e7275;
  margin-bottom: 15px;
`;

const ProjectSubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 300;
`;

const ProjectDesc = styled.li`
  list-style: circle;
  margin-bottom: 5px;
  &:before {
    content: "";
    position: absolute;

    left: 0;
    width: 5px;
    height: 1px;
    border-top: 1px #555 solid;
  }
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

const SideContainer = styled(FlexBox)`
  width: 20%;
`;

const ButtonContainer = styled(FlexBox)`
  cursor: pointer;
  padding: 0 20px;
  height: 100%;
  min-height: 300px;
`;

const LinkBtn = styled(FlexBox)`
  font-size: 0.9rem;
  height: fit-content;
  background-color: #dce0e3;
  max-width: fit-content;
  padding: 4px 5px;
  border-radius: 8px;
  line-height: 24px;
  word-break: keep-all;
  cursor: pointer;
  color: #000;
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
  console.log("##project", project);
  const [imgIdx, setImgIdx] = useState(0);
  const handleClickPrev = () => {
    setImgIdx((prev) => (prev === 0 ? project.length - 1 : prev - 1));
  };

  const handleClickNext = () => {
    setImgIdx((prev) => (prev === project.length - 1 ? 0 : prev + 1));
  };
  return (
    <FullContainer>
      <ContentContainer direction="column" justify="space-between">
        <FlexBox direction="column" align="flex-start">
          <ModalTitle>{project.title}</ModalTitle>
          <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
          <ProjectDate>{project.date}</ProjectDate>
        </FlexBox>
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
        <ModalDescription direction="column" align="flex-start">
          {project.description.map((desc, idx) => {
            return <ProjectDesc key={idx + desc}>{desc}</ProjectDesc>;
          })}
        </ModalDescription>

        <FlexBox justify="space-between">
          <TechnologiesUsed>
            {project.technologies.map((tech, index) => (
              <Technology key={index}>{tech}</Technology>
            ))}
          </TechnologiesUsed>
          {project?.link && (
            <LinkBtn
              onClick={() => {
                window.open(project.link, "_blank", "noopener, noreferrer");
              }}
            >
              Visit site
            </LinkBtn>
          )}
        </FlexBox>
      </ContentContainer>{" "}
      <SideContainer></SideContainer>
    </FullContainer>
  );
};

export default DetailLayout;
