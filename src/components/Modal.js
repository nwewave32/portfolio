import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";

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

const ModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  width: 80%;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ModalDescription = styled(FlexBox)`
  font-size: 1rem;
  margin-bottom: 20px;

  min-height: 300px;
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

const ContentContainer = styled(FlexBox)`
  padding: 0 24px;

  width: 100%;
`;

const ButtonContainer = styled.div`
  cursor: pointer;
  height: 100%;
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
`;

const NextButton = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <img src="next.png" width={24} height={24} alt="next" />
    </ButtonContainer>
  );
};

const PrevButton = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <img src="prev.png" width={24} height={24} alt="prev" />
    </ButtonContainer>
  );
};

const Modal = ({ project, onClose, onNext, onPrev }) => {
  const modalRef = useRef(null);
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
  return (
    <ModalOverlay>
      <ModalContainer ref={modalRef}>
        <FlexBox align="center">
          <PrevButton onClick={onPrev} />

          <ContentContainer direction="column" justify="space-between">
            <FlexBox direction="column" align="flex-start">
              <ModalTitle>{project.title}</ModalTitle>
              <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
              <ProjectDate>{project.date}</ProjectDate>
            </FlexBox>

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
              <LinkBtn>
                <img
                  src="link.png"
                  width={24}
                  height={24}
                  alt="link"
                  style={{ marginRight: "3px" }}
                />
                링크
              </LinkBtn>
            </FlexBox>
          </ContentContainer>
          <NextButton onClick={onNext} />
        </FlexBox>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
