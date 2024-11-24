import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import CustomImg from "components/CustomImg";
import { util } from "lib/util";
import { colorSet } from "lib/colorSet";

const ImageContainer = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  background-color: ${colorSet.background};
  margin-bottom: 100vh;
`;

const ImageBox = styled.div`
  position: relative;
  transition: transform 0.3s ease-out;
  transform: translateZ(${(props) => props.depth}px)
    scale(${(props) => props.scale});
  background-color: ${colorSet.background};
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const ImageSectionForMobile = ({ images }) => {
  const containerRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect();
      setScrollY(-top);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransformValues = (index) => {
    const baseDepth = 0;
    const depthStep = 100;
    const depth = baseDepth + depthStep * index - scrollY / 5;
    const scale = Math.min(1 - depth / 500, 0.7);

    return { depth, scale };
  };

  return (
    <div ref={containerRef}>
      <ImageContainer>
        {images.map((image, idx) => {
          const { depth, scale } = getTransformValues(idx);
          return (
            <ImageBox key={idx} depth={depth} scale={scale}>
              <Fade>
                <CustomImg
                  imgSrc={image}
                  alt={image}
                  width="100%"
                  height="auto"
                />
              </Fade>
            </ImageBox>
          );
        })}
      </ImageContainer>
    </div>
  );
};

export default ImageSectionForMobile;
