import React from "react";
import styled from "styled-components";

const SvgContainer = styled.svg`
  width: 100vw;
  height: 100vh;
  transition: transform 0.2s ease;
  overflow: visible; /* SVG가 클리핑되지 않도록 설정 */
`;

const AnimatedPath = styled.path`
  transition: transform 0.2s ease;
`;

const Test = () => {
  const handleMouseMove = (e) => {
    const svg = e.currentTarget;
    const { clientX, clientY } = e;
    const { left, top } = svg.getBoundingClientRect();

    const mouseX = (clientX - left) / svg.clientWidth; // 0 ~ 1 비율로 변환
    const mouseY = (clientY - top) / svg.clientHeight; // 0 ~ 1 비율로 변환

    // SVG의 각 path를 변형
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, index) => {
      const offsetX = (mouseX - 0.5) * 10; // X 방향으로 이동량 조정
      const offsetY = (mouseY - 0.5) * 10; // Y 방향으로 이동량 조정

      // 각 path에 transform 속성 추가
      path.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
    });
  };

  return (
    <SvgContainer
      id="visual"
      onMouseMove={handleMouseMove}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <AnimatedPath
        d="M0 217L25 196C50 175 100 133 150 126C200 119 250 147 300 174C350 201 400 227 450 239C500 251 550 249 600 228C650 207 700 167 750 153C800 139 850 151 875 157L900 163L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z"
        fill="#a9dad6"
      ></AnimatedPath>
      <AnimatedPath
        d="M0 271L25 259C50 247 100 223 150 225C200 227 250 255 300 277C350 299 400 315 450 317C500 319 550 307 600 291C650 275 700 255 750 247C800 239 850 243 875 245L900 247L900 161L875 155C850 149 800 137 750 151C700 165 650 205 600 226C550 247 500 249 450 237C400 225 350 199 300 172C250 145 200 117 150 124C100 131 50 173 25 194L0 215Z"
        fill="#95d2cc"
      ></AnimatedPath>
      <AnimatedPath
        d="M0 439L25 436C50 433 100 427 150 421C200 415 250 409 300 407C350 405 400 407 450 416C500 425 550 441 600 442C650 443 700 429 750 414C800 399 850 383 875 375L900 367L900 245L875 243C850 241 800 237 750 245C700 253 650 273 600 289C550 305 500 317 450 315C400 313 350 297 300 275C250 253 200 225 150 223C100 221 50 245 25 257L0 269Z"
        fill="#81c9c1"
      ></AnimatedPath>
      <AnimatedPath
        d="M0 517L25 520C50 523 100 529 150 535C200 541 250 547 300 549C350 551 400 549 450 549C500 549 550 551 600 553C650 555 700 557 750 551C800 545 850 531 875 524L900 517L900 365L875 373C850 381 800 397 750 412C700 427 650 441 600 440C550 439 500 423 450 414C400 405 350 403 300 405C250 407 200 413 150 419C100 425 50 431 25 434L0 437Z"
        fill="#6eafa8"
      ></AnimatedPath>
      <AnimatedPath
        d="M0 601L25 601C50 601 100 601 150 601C200 601 250 601 300 601C350 601 400 601 450 601C500 601 550 601 600 601C650 601 700 601 750 601C800 601 850 601 875 601L900 601L900 515L875 522C850 529 800 543 750 549C700 555 650 553 600 551C550 549 500 547 450 547C400 547 350 549 300 547C250 545 200 539 150 533C100 527 50 521 25 518L0 515Z"
        fill="#5c968f"
      ></AnimatedPath>
    </SvgContainer>
  );
};

export default Test;
