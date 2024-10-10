import { WaveGroup } from "./waveGroup";
export class Main {
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

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(1, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight / 2);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    // this.ctx.fillStyle = "blue";
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}
