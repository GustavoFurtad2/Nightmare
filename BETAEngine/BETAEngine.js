import {Player} from "./Player.js";

let WIDTH = 640;
let HEIGHT = 448;

let MAP_SIZE = 0;
let MAP = [];

const WALL_HEIGHT = 50;
export let Player = new Player();

export function SetMap(size, newmap) {
  MAP_SIZE = size;
  MAP = newmap;
}

var FOV = Player.FOV;

function castRay(angle) {
    var x = Player.x;
    var y = Player.y;
    var stepX = Math.cos(angle);
    var stepY = Math.sin(angle);

    while (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
        var mapX = Math.floor(x / (WIDTH / MAP_SIZE));
        var mapY = Math.floor(y / (HEIGHT / MAP_SIZE));

        if (MAP[mapY][mapX] === 1) {
            var distance = Math.sqrt((x - Player.x) ** 2 + (y - Player.y) ** 2);
            var wallHeight = WALL_HEIGHT / distance * Math.cos(angle - Player.angle);
            return {
                distance,
                wallHeight,
                hitWall: true
            };
        }
        x += stepX;
        y += stepY;
    }

    return {
        distance: Infinity,
        wallHeight: 0,
        hitWall: false
    };
}

export function render() {
    for (let col = 0; col < WIDTH; col++) {
        var rayAngle = Player.angle - FOV / 2 + (col / WIDTH) * FOV;
        var { distance, wallHeight, hitWall } = castRay(rayAngle);

        var lineHeight = (WALL_HEIGHT * HEIGHT) / (distance * Math.cos(rayAngle - Player.angle));
        var wallTop = (HEIGHT - lineHeight) / 2;

        Draw.rect(col, wallTop, 1, lineHeight, hitWall ? Color.new(40, 40, 40) : Color.new(0, 0, 0));
    }
}
