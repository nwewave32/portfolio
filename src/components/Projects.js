import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import WavySeparator from "./WavySeparator";
import DetailLayout from "./DetailLayout";
import { Technology, TechnologiesUsed, FlexBox } from "./GlobalStyles";
import { Zoom } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";
import InfiniteAutoSlider from "./InfiniteAutoSlider";
import { useDispatch, useSelector } from "react-redux";
import { breakpoints, projectsData } from "lib/globalData";

const ProjectContainer = styled(FlexBox)`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colorSet.base};
`;

const ProjectsSection = styled(FlexBox)`
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: ${colorSet.base};
  box-sizing: border-box;
  will-change: opacity, transform;
  opacity: ${(props) => props.visibility};
  transform: ${(props) => `scale(${props.visibility})`};
  transition: opacity 1s ease-in-out, transform 0.4s ease-in-out;
`;

const DetailSection = styled(FlexBox)`
  width: 100%;
`;

const EmptySeparator = styled.div`
  width: 100%;
  padding-top: 500px;
  background-color: ${colorSet.base};
  position: relative;
`;

const rotateText = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: ${colorSet.accent};
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  z-index: 10;

  &:hover {
    animation: ${rotateText} 2s linear infinite;
  }
`;

const RotatingSection = styled.section`
  position: absolute;
  animation: ${rotateText} 10.5s linear infinite;
`;

const Letter = styled.span`
  position: absolute;
  font-family: Poppins;
  top: -35px;
  will-change: transform;
  font-size: 10px;
  display: inline-block;
  color: white;
  transform-origin: 0 35px;
  transform: ${({ index }) => `rotate(${index * 14.5}deg)`};
`;

const Projects = () => {
  const [visibility, setVisibility] = useState(1);
  const sectionRef = useRef(null);
  const [topBtnVisibility, setTopBtnVisibility] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  useEffect(() => {
    const detailSection = document.body.querySelector("#detail");

    if (detailSection) {
      const offset = detailSection.offsetTop;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }

    const handleScroll = () => {
      if (window.scrollY > window.outerHeight / 4)
        setVisibility(1 - window.scrollY / window.outerHeight);
      else setVisibility(1);

      if (window.scrollY > window.outerHeight / 3) setTopBtnVisibility(true);
      else setTopBtnVisibility(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedProjectIndex]);

  const text = "back to top";
  const letters = text.split("");

  return (
    <ProjectContainer direction="column" align="center" ref={sectionRef}>
      <Zoom>
        <ProjectsSection
          justify="center"
          visibility={visibility < 0 ? 0 : visibility}
          id="project"
        >
          <GridProjecet
            clickProject={(index) => {
              setSelectedProjectIndex(index);
            }}
          />
        </ProjectsSection>
      </Zoom>

      <EmptySeparator>
        <WavySeparator
          mainColor={colorSet.background}
          backColor={colorSet.accent}
        />
      </EmptySeparator>
      {selectedProjectIndex !== null && (
        <DetailSection id="detail">
          <DetailLayout project={projectsData[selectedProjectIndex]} />
        </DetailSection>
      )}

      {topBtnVisibility && (
        <BackToTopButton onClick={scrollToTop}>
          <RotatingSection>
            {letters.map((item, index) => (
              <Letter key={index} index={index}>
                {item}
              </Letter>
            ))}
          </RotatingSection>
        </BackToTopButton>
      )}
    </ProjectContainer>
  );
};

export default Projects;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ length }) => length},
    ${({ width }) => width}px
  );
  gap: 24px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: center;
`;

const Column = styled.div`
  flex: 1;
`;

const GridProjecet = ({ clickProject }) => {
  const isMobile = window.innerWidth <= breakpoints.mobile;
  const getHeight = () => {
    if (isMobile) return 250;
    else return Math.max(Math.floor(window.innerHeight / 4), 300);
  };
  const HEIGHT = getHeight();
  const LENGTH = isMobile ? 3 : 4;

  return (
    <GridContainer width={HEIGHT} length={LENGTH}>
      {Array.from({ length: LENGTH }).map((_, columnIndex) => {
        return (
          <Column key={columnIndex} direction="column">
            <InfiniteAutoSlider
              projects={projectsData}
              isUp={columnIndex % 2 === 0}
              clickProject={clickProject}
              columnIndex={columnIndex}
              height={HEIGHT}
            />
          </Column>
        );
      })}
    </GridContainer>
  );
};
