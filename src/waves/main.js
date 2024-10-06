import { WaveGroup } from "./waveGroup.js";
export class Main {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    //캔버스 그려주기

    this.waveGroup = new WaveGroup();
    //웨이브 그룹 실행
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    //전체 화면 크기 조정
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); // 캔버스 전체 지우기
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }

  getImage() {
    return this.img;
  }

  getCtx() {
    return this.ctx;
  }

  getCanvas() {
    return this.canvas;
  }
}
