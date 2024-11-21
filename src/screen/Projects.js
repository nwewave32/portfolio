import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import WavySeparator from "components/WavySeparator";
import DetailLayout from "../components/works/DetailLayout";
import { FlexBox } from "components/GlobalStyles";
import { Zoom } from "react-awesome-reveal";
import { colorSet } from "lib/colorSet";
import InfiniteAutoSlider from "../components/works/InfiniteAutoSlider";
import { useDispatch, useSelector } from "react-redux";
import { breakpoints, projectsData } from "lib/globalData";
import { clearSelectedProjectId, setSelectedProjectId } from "features/global";
import { useLocation, useNavigate } from "react-router-dom";
import { util } from "lib/util";

const ProjectContainer = styled(FlexBox)`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colorSet.base};
`;

const ProjectsSection = styled(FlexBox)
  .attrs(({ visibility }) => ({
    style: {
      opacity: `${visibility}`,
      transform: `${`scale(${visibility})`}`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["visibility"].includes(prop),
  })`
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: ${colorSet.base};
  box-sizing: border-box;
  will-change: opacity, transform;

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

  @media (min-width: ${breakpoints.imac}px) {
    padding-top: 900px;
  }
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
  z-index: 15;

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(1);
  const sectionRef = useRef(null);
  const [topBtnVisibility, setTopBtnVisibility] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedProjectId = useSelector(
    (state) => state.project.selectedProjectId
  );

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
  }, [selectedProjectId]);

  useEffect(() => {
    return () => {
      dispatch(clearSelectedProjectId());
    };
  }, []);

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
              dispatch(setSelectedProjectId(index));
              navigate(`/works/${index}`);
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
      {selectedProjectId !== null && (
        <DetailSection id="detail">
          <DetailLayout project={projectsData[selectedProjectId]} />
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
  const isMobile = util.getWindowType("mobile");
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
