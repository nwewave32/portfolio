import { colorSet } from "lib/colorSet";
import React, { useCallback, useState, useEffect } from "react";
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
  shouldForwardProp: (prop) => !["isUp", "needStop"].includes(prop),
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
  animation-play-state: ${(props) => (props.needStop ? "paused" : "running")};
`;

const backgroundImg = ({ isHovered, imgUrl }) => {
  return isHovered
    ? `background-image: url(${imgUrl}); background-size: cover; background-position: center; `
    : "";
};

const Slide = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isHovered", "imgUrl"].includes(prop),
})`
  position: relative;
  background-color: ${(props) =>
    props.isHovered ? colorSet.base : colorSet.background};
  text-shadow: ${(props) => (props.isHovered ? "1px 1px 2px #000" : "unset")};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: ${(props) => props.margin}px;
  height: ${(props) => props.height}px;
  font-size: 32px;
  font-weight: 400;
  ${backgroundImg}
`;

const cardTransition = ({ isHovered }) => {
  return isHovered ? "top: 65%; transition-duration: 1.5s;" : "";
};

const CardTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isHovered"].includes(prop),
})`
  display: inline-block;
  position: absolute;
  top: 5%;
  left: 4%;
  ${cardTransition};
  color: ${(props) => (props.isHovered ? colorSet.background : colorSet.base)};
  font-size: 3.5vh;
  line-height: 1;
  overflow-wrap: normal;
`;

const BlurredCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const InfiniteAutoSlider = ({
  columnIndex,
  projects,
  isUp,
  clickProject,
  height,
}) => {
  const [needStop, setNeedStop] = useState(false);

  useEffect(() => {}, []);

  const handleMouseEnter = (projectId) => {
    //todo: 화면 커지면 마우스 오버 안됨
    setHoverItem({ column: columnIndex, idx: projectId });
    setNeedStop(true);
  };

  const handleMouseLeave = () => {
    setHoverItem(HOVER_ITEM_FORMAT);
    setNeedStop(false);
  };

  const HOVER_ITEM_FORMAT = {
    column: "",
    idx: "",
  };
  const [hoverItem, setHoverItem] = useState(HOVER_ITEM_FORMAT);

  const MARGIN = 20;
  //const HEIGHT = Math.max(Math.floor(window.innerHeight / 4), 300);

  const LENGTH = projects.length;

  const checkIsHovered = useCallback(
    (id) => {
      return columnIndex === hoverItem.column && id === hoverItem.idx;
    },
    [hoverItem]
  );

  return (
    <Slider>
      <SlideTrack
        height={height}
        length={LENGTH}
        margin={MARGIN}
        isUp={isUp}
        needStop={needStop}
      >
        {projects.concat(projects).map((project, index) => (
          <Slide
            key={index}
            height={height}
            margin={MARGIN}
            onClick={() => clickProject(project.id)}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            isHovered={checkIsHovered(project.id)}
            imgUrl={project.thumbnail}
          >
            {checkIsHovered(project.id) && <BlurredCover />}
            <CardTitle isHovered={checkIsHovered(project.id)}>
              {project.title}
            </CardTitle>
          </Slide>
        ))}
      </SlideTrack>
    </Slider>
  );
};

export default InfiniteAutoSlider;
