import styled, { keyframes } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { Main } from "../waves/main";
import { Link } from "react-router-dom";
import { FlexBox } from "./GlobalStyles";

const HomeContainer = styled(FlexBox)`
  height: 100%;
  width: 100%;
`;

const HeroSection = styled.section`
  width: 100%;
  color: #282c34;
  text-align: center;
  padding: 50px 20px;
  transform: translateY(100%);
  z-index: 9;
  overflow: hidden;
  height: 100%;
`;
const moveWords = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  position: relative;
  animation: ${moveWords} 20s linear infinite;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const CTAButton = styled.button`
  background-color: #282c34;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  border: 1px solid #f5f5f5;

  &:hover {
    background-color: #444;
  }
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  bottom: 0;
  height: 50%;
  z-index: 50;
`;

const TmpTxt = styled.h1`
  font-size: 150px;
  font-weight: 900;
  -webkit-text-stroke: 3px #fff;
  color: transparent;
`;

const Home = () => {
  const canvasRef = useRef(null); // Canvas에 대한 Ref 생성
  const mainInstance = useRef(null); // Main 클래스 인스턴스 보관

  const [mouseX, setMouseX] = useState(0); // 마우스 위치 저장
  const [ripples, setRipples] = useState([]); // 물방울 효과 저장

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");
  //   const waveHeight = 200;
  //   const waveLength = canvas.width / 10;
  //   const speed = 0.03;
  //   let phase = 0;

  //   const drawRipple = () => {
  //     // 물방울 효과 그리기
  //     ripples.forEach((ripple, index) => {
  //       ripple.radius += 2; // 물방울 크기 증가
  //       ctx.beginPath();
  //       ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
  //       ctx.strokeStyle = `rgba(255, 255, 255, ${1 - ripple.radius / 100})`; // 점점 투명해짐
  //       ctx.stroke();
  //       ctx.closePath();

  //       // 물방울이 너무 커지면 배열에서 제거
  //       if (ripple.radius > 100) {
  //         ripples.splice(index, 1);
  //       }
  //     });
  //     requestAnimationFrame(drawRipple);
  //   };
  //   // 파도 그리기 함수
  //   const drawWave = () => {
  //     ctx.beginPath();
  //     ctx.moveTo(0, canvas.height / 2);

  //     for (let x = 0; x < canvas.width; x += 10) {
  //       const y =
  //         waveHeight *
  //           Math.sin(
  //             (x + phase + (mouseX / window.innerWidth) * 50) / waveLength
  //           ) + // 마우스에 따른 파도 흔들림
  //         canvas.height / 2;
  //       ctx.lineTo(x, y);
  //     }

  //     // ctx.lineTo(canvas.width, canvas.height);
  //     // ctx.lineTo(0, canvas.height);
  //     // ctx.closePath();
  //     // ctx.fillStyle = "#6ec6ff";
  //     // ctx.fill();

  //     phase += speed; // 파도 움직임 업데이트
  //     requestAnimationFrame(drawWave);
  //   };
  //   drawRipple();
  //   // drawWave();
  // }, [mouseX, ripples]);

  // 마우스 움직임에 따른 파도 흔들림
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
  };

  // 클릭 시 물방울 효과 추가
  const handleClick = (e) => {
    const newRipple = { x: e.clientX, y: e.clientY, radius: 0 };
    setRipples((oldRipples) => [...oldRipples, newRipple]);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때만 Main 클래스 인스턴스 생성
    // mainInstance.current = new Main(canvasRef.current);

    // 언마운트될 때 정리 작업
    return () => {
      // window.removeEventListener("resize", mainInstance.current.resize);
    };
  }, []);
  return (
    <HomeContainer>
      <HeroSection>
        <TmpTxt>nwe wave</TmpTxt>
        {/* <Heading>
          Welcome, I'm a Frontend Developer{" "}
          <span style={{ fontWeight: 400 }}>nwewave</span>
        </Heading>
        <Description>Let's surf with me!</Description>
        <CTAButton>
          <Link to="/contact">CONTACT ME</Link>
        </CTAButton> */}
      </HeroSection>
      {/* <StyledCanvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onClick={(e) => {
          e.stopPropagation();
          handleClick(e);
        }}
      /> */}
    </HomeContainer>
  );
};

export default Home;
