import React from "react";
import styled, { keyframes } from "styled-components";

// 애니메이션 키프레임
const scroll = (height, length) => keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(-${height}px * ${length})); }
`;

// 스타일 정의
const Slider = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  width: 250px;
  margin: auto;
  overflow: hidden;
  position: relative;
  height: 600px; /* 슬라이더의 높이 설정 */
`;

const SlideTrack = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배열로 변경 */
  height: ${(props) => `calc(${props.height} * ${props.length} * 2px)`};
  animation: ${(props) => scroll(props.height, props.length)} 10s linear
    infinite;
`;

const Slide = styled.div`
  width: 100%; /* 슬라이드의 너비는 부모와 동일 */
  height: ${(props) => props.height}px;
`;

const Image = styled.img`
  width: 100%; /* 이미지의 너비는 슬라이드의 너비와 동일 */
  height: ${(props) => props.height}px;
`;

// 컴포넌트
const Test = () => {
  const slides = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  ];

  const HEIGHT = 100;
  const LENGTH = slides.length;

  return (
    <Slider>
      <SlideTrack height={HEIGHT} length={LENGTH}>
        {slides.concat(slides).map((src, index) => (
          <Slide key={index} height={HEIGHT}>
            <Image src={src} alt="" height={HEIGHT} />
          </Slide>
        ))}
      </SlideTrack>
    </Slider>
  );
};

export default Test;
