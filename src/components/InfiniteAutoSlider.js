import { colorSet } from "lib/colorSet";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const scroll = (height, margin, length) => keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(-${height + margin}px * ${length})); }
`;

const reverseScroll = (height, margin, length) => keyframes`
0% { transform: translateY(calc(-${height + margin}px * ${length})); }
100% { transform: translateY(0); }
`;

const Slider = styled.div`
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  overflow: hidden;
  position: relative;
  height: 100%;
`;

const SlideTrack = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isUp"].includes(prop),
})`
  display: flex;
  flex-direction: column;
  height: calc(
    ${(props) => (props.height + props.margin) * props.length * 2}px
  );
  animation: ${(props) =>
      props.isUp
        ? scroll(props.height, props.margin, props.length)
        : reverseScroll(props.height, props.margin, props.length)}
    40s linear infinite;
`;

const Slide = styled.div`
  background-color: ${(props) =>
    props.isHovered ? colorSet.base : colorSet.background};
  color: ${(props) => (props.isHovered ? colorSet.background : colorSet.base)};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: ${(props) => props.margin}px;
  height: ${(props) => props.height}px;
  font-size: 32px;
  font-weight: 400;
`;

// 컴포넌트
const InfiniteAutoSlider = ({ columnIndex, projects, isUp, clickProject }) => {
  const HOVER_ITEM_FORMAT = {
    column: "",
    idx: "",
  };
  const [hoverItem, setHoverItem] = useState(HOVER_ITEM_FORMAT);

  const MARGIN = 20;
  const HEIGHT = 300;
  const LENGTH = projects.length;
  return (
    <Slider>
      <SlideTrack height={HEIGHT} length={LENGTH} margin={MARGIN} isUp={isUp}>
        {projects.concat(projects).map((project, index) => (
          <Slide
            key={index}
            height={HEIGHT}
            margin={MARGIN}
            onClick={() => clickProject(project.id)}
            onMouseEnter={() => {
              setHoverItem(() => {
                return { column: columnIndex, idx: project.id };
              });
            }}
            onMouseLeave={() => {
              setHoverItem(HOVER_ITEM_FORMAT);
            }}
            isHovered={
              columnIndex === hoverItem.column && project.id === hoverItem.idx
            }
          >
            {project.title}
          </Slide>
        ))}
      </SlideTrack>
    </Slider>
  );
};

export default InfiniteAutoSlider;
