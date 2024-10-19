import React, { useRef, useEffect, useState } from "react";
import "../css/reset.css";
import "../css/wave.css";
import { Main } from "../waves/main.js";
import styled from "styled-components";

function MainScreen() {
  const canvasRef = useRef(null);
  const [mouseX, setMouseX] = useState(0); // 마우스 위치 저장
  const [ripples, setRipples] = useState([]); // 물방울 효과 저장

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const waveHeight = 20;
    const waveLength = canvas.width / 10;
    const speed = 0.03;
    let phase = 0;

    // 파도 그리기 함수
    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x += 10) {
        const y =
          waveHeight *
            Math.sin(
              (x + phase + (mouseX / window.innerWidth) * 50) / waveLength
            ) + // 마우스에 따른 파도 흔들림
          canvas.height / 2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = "#6ec6ff";
      ctx.fill();

      // 물방울 효과 그리기
      ripples.forEach((ripple, index) => {
        ripple.radius += 2; // 물방울 크기 증가
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - ripple.radius / 100})`; // 점점 투명해짐
        ctx.stroke();
        ctx.closePath();

        // 물방울이 너무 커지면 배열에서 제거
        if (ripple.radius > 100) {
          ripples.splice(index, 1);
        }
      });

      phase += speed; // 파도 움직임 업데이트
      requestAnimationFrame(drawWave);
    };

    drawWave();
  }, [mouseX, ripples]);

  // 마우스 움직임에 따른 파도 흔들림
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
  };

  // 클릭 시 물방울 효과 추가
  const handleClick = (e) => {
    const newRipple = { x: e.clientX, y: e.clientY, radius: 0 };
    setRipples((oldRipples) => [...oldRipples, newRipple]);
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={200}
      style={{ display: "block", zIndex: "-100" }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    />
  );
}

export default MainScreen;
