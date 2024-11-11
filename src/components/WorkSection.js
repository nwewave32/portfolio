import { breakpoints, projectsData } from "lib/globalData";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

import { colorSet, waveColorSet } from "lib/colorSet";
import {
  FlexBox,
  FullContainer,
  WavyText,
  StyledSpan,
  StyledSvg,
} from "./GlobalStyles";
import WavySeparator from "./WavySeparator";
import InfiniteAutoSlider from "./InfiniteAutoSlider";
import CustomButton from "./CustomButton";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProjectId } from "features/global";
import { useNavigate } from "react-router-dom";

const Column = styled.div`
  width: ${({ width }) => width}px;
  padding: 0px 20px;
`;

const ProjectWrap = styled.div
  .attrs(({ visibility }) => ({
    style: {
      opacity: `${visibility}`,
      transform: `${`scale(${visibility}) translateY(-10%)`}`,
    },
  }))
  .withConfig({
    shouldForwardProp: (prop) => !["visibility"].includes(prop),
  })`
  
  width: 50vw;
  height: 70%;

  display:grid;
	grid-template-columns: repeat(3, minmax(100px, auto));
	grid-template-rows: repeat(2, minmax(100px, auto));
  row-gap: 20px;

  

  transition: opacity 1s ease-in-out, transform 0.4s ease-in-out;
`;

const GridCell = styled.div`
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  &:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const ProjectGridCell = styled.div.withConfig({
  shouldForwardProp: (prop) => !["imgUrl"].includes(prop),
})`
  width: 100%;
  height: 100%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const DescriptionGridCell = styled(FlexBox)`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const WorkSection = ({ scroll }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getVisibility = () => {
    const result = 1 - (scroll - window.outerHeight * 2) / window.outerHeight;

    return result > 1 ? 1 : result < 0 ? 0 : result;
  };

  const buttonTemplate = {
    type: "link",
    url: "/works",
    title: "View Project",
  };

  const handleClick = (e, idx) => {
    dispatch(setSelectedProjectId(idx));
  };

  const selectedProjectId = useSelector(
    (state) => state.project.selectedProjectId
  );

  useEffect(() => {
    if (selectedProjectId) {
      navigate("/works");
    } else if (selectedProjectId === null) {
      navigate("/");
    }
  }, [selectedProjectId]);

  return (
    <>
      <FullContainer justify="center" align="center" height="100%">
        <ProjectWrap visibility={getVisibility()}>
          <GridCell>
            <ProjectGridCell
              onClick={(e) => handleClick(e, 3)}
              imgUrl={projectsData[3].thumbnail}
            />
          </GridCell>
          <GridCell>
            <DescriptionGridCell
              direction="column"
              justify="space-between"
              align="start"
            >
              {projectsData[3].description.toString()}
              <CustomButton
                onClick={(e) => handleClick(e, 3)}
                button={{
                  ...buttonTemplate,
                }}
                isBlank={false}
              />
            </DescriptionGridCell>
          </GridCell>
          <GridCell>
            <DescriptionGridCell
              direction="column"
              justify="space-between"
              align="end"
            >
              <CustomButton
                onClick={(e) => handleClick(e, 5)}
                button={{
                  ...buttonTemplate,
                }}
                isBlank={false}
              />
              {projectsData[5].description.toString()}
            </DescriptionGridCell>
          </GridCell>
          <GridCell>
            <ProjectGridCell
              onClick={(e) => handleClick(e, 5)}
              imgUrl={projectsData[5].thumbnail}
            />
          </GridCell>
        </ProjectWrap>
        <WavySeparator mainColor={waveColorSet.layer4} />
      </FullContainer>
    </>
  );
};

export default WorkSection;
