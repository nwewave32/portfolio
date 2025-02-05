import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import CustomImg from "components/CustomImg";
import { util } from "lib/util";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  background-color: rgba(240, 120, 50, 0.2);
`;

const ImageBox = styled.div`
  position: relative;
  transition: transform 0.3s ease-out;
  transform: translateZ(${(props) => props.depth}px)
    scale(${(props) => props.scale});
  opacity: ${(props) => props.opacity};
`;

const ImageSection = () => {
  const images = [
    "cookie_or_death/cookie1.png",
    "cookie_or_death/cookie2.png",
    "cookie_or_death/cookie3.png",
    "cookie_or_death/cookie4.png",
  ];
  const containerRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect();
      setScrollY(-top); // 컨테이너 상단에서 얼마나 스크롤했는지 계산
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransformValues = (index) => {
    const baseDepth = -200; // 기본 깊이값
    const depthStep = 100; // 각 이미지 간 깊이 차이
    const depth = baseDepth + depthStep * index - scrollY / 5; // 스크롤에 따른 깊이 계산
    const scale = Math.min(Math.max(1 - depth / 500, 0.8), 1); // 스크롤에 따라 크기 축소
    const opacity = Math.min(Math.max(1 - depth / 1000, 0.5), 1); // 스크롤에 따라 투명도 감소
    console.log("##", index, { depth, scale, opacity });
    return { depth, scale, opacity };
  };

  return (
    <div ref={containerRef}>
      <ImageContainer>
        {images.map((image, idx) => {
          const { depth, scale, opacity } = getTransformValues(idx);
          return (
            <ImageBox key={idx} depth={depth} scale={scale} opacity={opacity}>
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

export default ImageSection;
