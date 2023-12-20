var PI = Math.PI;

function lshift(x, y) {
    return Math.floor(x * 2 ^ y)
}

function rshift(x, y) {
    return Math.floor(x / 2 ^ y)
}

var font = new Font();

let mapW = 0;
let mapH = 0;
let mapS = 0;
let map = []
font.Color = Color.new(255, 0, 0)
export function mapSet(width, height, newMap) {
    mapW = width;
    mapH = height;
    mapS = mapW * mapH;
    map = newMap;
}
export class Player {
   x = 200;
   y = 400;
   deltaX = 0;
   deltaY = 0;
   angle = 0;

   DrawPlayer() {
    Draw.point(this.x, this.y, Color.new(255, 255, 0));

    Draw.line(this.x, this.y, this.x + this.deltaX * 10, this.y + this.deltaY * 10, Color.new(255, 255, 0));

    this.DrawRays3d();
    }

    DrawRays3d() {

    }

   TurnLeft(connect) {
    this.angle -= 0.1;
     if (this.angle < 0) {
       this.angle += 2 * PI;
     }
    this.deltaX = Math.cos(this.angle) * 5;
    this.deltaY = Math.sin(this.angle) * 5;

     if (typeof connect != "undefined") {
        connect();
     }
   }

   TurnRight(connect) {
    this.angle += 0.1;
    if (this.angle > 2 * PI) {
      this.angle -= 2 * PI;
    }
    this.deltaX = Math.cos(this.angle) * 5;
    this.deltaY = Math.sin(this.angle) * 5;
    
    if (typeof connect != "undefined") {
       connect();
    }
  }

  WalkFront(connect) {
    this.x += this.deltaX;
    this.y += this.deltaY;
    if (typeof connect != "undefined") {
        connect();
     }
  }

  WalkBack(connect) {
    this.x -= this.deltaX;
    this.y -= this.deltaY;
    if (typeof connect != "undefined") {
        connect();
     }
  }
}
