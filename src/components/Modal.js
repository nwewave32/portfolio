import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled(FlexBox)`
  background-color: #fff;
  width: 80%;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin: 10px 0;
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
  padding: 24px 0;
  width: 100%;
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

const Modal = ({ project, onClose, onNext, onPrev, modalKey }) => {
  const modalRef = useRef(null);

  const [imgIdx, setImgIdx] = useState(0);

  useLayoutEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickPrev = () => {
    setImgIdx((prev) => {
      let result = prev - 1;
      if (result < 0) result = project.images.length - 1;
      return result;
    });
  };

  const handleClickNext = () => {
    setImgIdx((prev) => {
      let result = prev + 1;
      if (result > project.images.length - 1) result = 0;
      return result;
    });
  };

  return (
    <ModalOverlay>
      <ModalContainer ref={modalRef} align="center">
        <PrevButton
          onClick={() => {
            onPrev();
          }}
        />

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
                <img
                  src="link.png"
                  width={24}
                  height={24}
                  alt="link"
                  style={{ marginRight: "3px" }}
                />
                링크
              </LinkBtn>
            )}
          </FlexBox>
        </ContentContainer>
        <NextButton
          onClick={() => {
            onNext();
          }}
        />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
