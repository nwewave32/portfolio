import { Wave } from "./wave.js";
export class WaveGroup {
  constructor() {
    this.totalWaves = 5; //웨이브의 개수
    this.totalPoints = 6; //한 웨이브 안에 들어가는 점 개수

    this.color = [
      "rgba(0,199,235,0.4)",
      "rgba(0,146,199,0.4)",
      "rgba(0,0,0,0,)",
      "rgba(0,97,177,0.4)",
      "rgba(0,87,158,0.4)",
    ];
    this.waves = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];

      if (i === 2) wave.drawSurfer(ctx);
      else wave.draw(ctx);
    }
  }

  handleClick(event, canvas, ctx) {
    this.waves[2].handleClick(event, canvas, ctx);
  }
}
