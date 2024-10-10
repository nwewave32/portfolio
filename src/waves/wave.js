import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints; //웨이브안에 들어있는 점의 개수
    this.color = color;
    this.isClicked = false;
    this.points = [];

    this.surfer = {
      x: 0,
      y: 0,
      radius: 50, // 서퍼 원의 반지름
    };
    this.text = {
      x: 0,
      y: 0,
      radius: 50, // 서퍼 원의 반지름
    };
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 6;

    this.pointGap = this.stageWidth / (this.totalPoints - 1); //현재 스크린 너비에서 전체 점의 개수 나눈값
    this.init();
  }

  init() {
    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY); //Point(index, x, y);
      this.points[i] = point;
    }
    this.surferPoint = new Point(2, this.centerX + 200, this.centerY - 35);
    this.textBubble = new Point(2, this.centerX + 300, this.centerY - 50);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;
    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
        //i=0,i=this.totalPoints - 1 제외하고 움직임
      }
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }

  drawSurfer(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0)";
    this.surferPoint.update();
    this.surfer.x = this.surferPoint.x;
    this.surfer.y = this.surferPoint.y; // 서퍼의 현재 좌표 업데이트
    ctx.arc(
      this.surfer.x + 25,
      this.surfer.y + 25,
      this.surfer.radius,
      0,
      2 * Math.PI
    );
    ctx.fill();

    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/surfer.png`;

    ctx.drawImage(img, this.surfer.x, this.surfer.y, 50, 50);

    // const fishImg = new Image();
    // fishImg.src = `${process.env.PUBLIC_URL}/fish.png`;

    // ctx.drawImage(fishImg, 500, 500, 50, 50);

    if (this.isClicked) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.arc(
        this.surfer.x + 100,
        this.surfer.y - 50,
        this.surfer.radius,
        0,
        2 * Math.PI
      );
      this.text.x = this.surfer.x + 100;
      this.text.y = this.surfer.y - 50;
      ctx.fill();
    }
  }

  handleClick(event, canvas, ctx) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left; // 캔버스 내 클릭 좌표 X
    const clickY = event.clientY - rect.top; // 캔버스 내 클릭 좌표 Y

    const distance = Math.sqrt(
      (clickX - this.surfer.x) ** 2 + (clickY - this.surfer.y) ** 2
    );

    const distance2 = Math.sqrt(
      (clickX - this.text.x) ** 2 + (clickY - this.text.y) ** 2
    );

    // 클릭한 좌표가 서퍼의 원 안에 있는지 확인
    if (distance <= this.surfer.radius) {
      this.isClicked ? (this.isClicked = false) : (this.isClicked = true);
      console.log("Canvas clicked");
    }

    if (distance2 <= this.text.radius) {
      console.log("Canvas clicked2");
    }
  }
}
