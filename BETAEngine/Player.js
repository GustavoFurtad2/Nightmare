let WIDTH = 640;
let HEIGHT = 448;

export class Player {
  x = WIDTH / 2;
  y = HEIGHT / 2;
  speed = 5;
  fov = Math.PI / 4;
  angle = Math.PI / 2;

  TurnLeft() {
    this.angle -= 0.1;
  }

  TurnRight() {
    this.angle += 0.1;
  }

  WalkFront() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
  }

  WalkBack() {
    this.x -= this.speed * Math.cos(this.angle);
    this.y -= this.speed * Math.sin(this.angle);   
  }
}
