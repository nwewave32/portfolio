import "./css/reset.css";

import React, { useEffect, useRef, useState } from "react";
import { WaveGroup } from "./waves/waveGroup"; // 기존 waveGroup import

const App = () => {
  const canvasRef = useRef(null); // Canvas에 대한 Ref 생성
  const surferRef = useRef(null); // Canvas에 대한 Ref 생성
  const mainInstance = useRef(null); // Main 클래스 인스턴스 보관

  const [mouseX, setMouseX] = useState(0); // 마우스 위치 저장
  const [ripples, setRipples] = useState([]); // 물방울 효과 저장

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const waveHeight = 200;
    const waveLength = canvas.width / 10;
    const speed = 0.03;
    let phase = 0;

    const drawRipple = () => {
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
      requestAnimationFrame(drawRipple);
    };
    // 파도 그리기 함수
    const drawWave = () => {
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

      // ctx.lineTo(canvas.width, canvas.height);
      // ctx.lineTo(0, canvas.height);
      // ctx.closePath();
      // ctx.fillStyle = "#6ec6ff";
      // ctx.fill();

      phase += speed; // 파도 움직임 업데이트
      requestAnimationFrame(drawWave);
    };
    drawRipple();
    // drawWave();
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

  useEffect(() => {
    // 컴포넌트가 마운트될 때만 Main 클래스 인스턴스 생성
    mainInstance.current = new Main(canvasRef.current);

    // 언마운트될 때 정리 작업
    return () => {
      window.removeEventListener("resize", mainInstance.current.resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(e);
      }}
    />
  );
};

class Main {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.waveGroup = new WaveGroup();
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    // this.canvas.addEventListener("click", (event) => {
    //   this.waveGroup.handleClick(event, this.canvas);
    // });
    if (!this.clickListenerAdded) {
      this.canvas.addEventListener("click", (event) => {
        this.waveGroup.handleClick(event, this.canvas, this.ctx); // bind 대신 바로 함수 호출
      });
      this.clickListenerAdded = true; // 리스너가 등록되었음을 표시
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default App;
