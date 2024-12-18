import { breakpoints, projectsData } from "lib/globalData";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { colorSet } from "lib/colorSet";
import { FlexBox, FullContainer } from "../GlobalStyles";
import WavySeparator from "../WavySeparator";

import CustomButton from "../CustomButton";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedProjectId } from "features/global";
import { useNavigate } from "react-router-dom";
import { util } from "lib/util";

const ProjectWrap = styled(FlexBox)
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
  transition: opacity 1s ease-in-out, transform 0.4s ease-in-out;    
  @media (max-width: ${breakpoints.tabletPortrait}px) {
    width: 90vw;
  }

`;

const RowContainer = styled(FlexBox)`
  flex-wrap: nowrap;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    flex-wrap: wrap;
    &:last-child {
      flex-wrap: wrap-reverse;
    }
  }
`;

const ProjectBox = styled(FlexBox).withConfig({
  shouldForwardProp: (prop) => !["imgUrl"].includes(prop),
})`
  flex: 3;
  width: 100%;
  height: 30vh;
  background-image: url(${({ imgUrl }) =>
    process.env.PUBLIC_URL + "/assets/" + imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tabletPortrait}px) {
    height: 25vh;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    min-width: 300px;
  }
`;

const DescriptionBox = styled(FlexBox)`
  flex: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}px) {
    height: auto;
  }

  @media (min-width: ${breakpoints.imac}px) {
  }
`;

const WorkSection = ({ scroll }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = util.getWindowType("mobile");

  const getVisibility = () => {
    const result = 1 - (scroll - window.innerHeight * 2) / window.innerHeight;

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
      navigate(`/works/${selectedProjectId}`);
    } else if (selectedProjectId === null) {
      navigate("/");
    }
  }, [selectedProjectId, navigate]);

  return (
    <>
      <FullContainer justify="center" align="center" height="100%">
        <ProjectWrap visibility={getVisibility()} direction="column">
          <RowContainer>
            <ProjectBox
              onClick={(e) => handleClick(e, 1)}
              imgUrl={projectsData[1].thumbnail}
            />
            <DescriptionBox
              direction="column"
              justify="space-between"
              align="start"
            >
              <span>{!isMobile && projectsData[1].description[0]}</span>
              <CustomButton
                onClick={(e) => handleClick(e, 1)}
                button={{
                  ...buttonTemplate,
                }}
                isBlank={false}
              />
            </DescriptionBox>
          </RowContainer>

          <RowContainer>
            <DescriptionBox
              direction="column"
              justify="space-between"
              align="end"
            >
              <CustomButton
                onClick={(e) => handleClick(e, 6)}
                button={{
                  ...buttonTemplate,
                }}
                isBlank={false}
              />
              <span>{!isMobile && projectsData[6].description[0]}</span>
            </DescriptionBox>
            <ProjectBox
              onClick={(e) => handleClick(e, 6)}
              imgUrl={projectsData[6].thumbnail}
            />
          </RowContainer>
        </ProjectWrap>
        <WavySeparator mainColor={colorSet.background} />
      </FullContainer>
    </>
  );
};

export default WorkSection;
