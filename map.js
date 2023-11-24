let Width = 640;
let Height = 448;

let map = new Array(
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
);

let  MapSize = 32;
let  MapScale = 10;
let  MapRange = MapScale * MapSize;
let  MapSpeed = 0.5;

let playerX = MapScale + 20;
let playerY = MapScale + 20;
var playerAngle = Math.PI / 3;

const PI2 = Math.PI * 2;
const FOV = Math.PI / 3;
const HALF_FOV = FOV / 2;
const STEPANGLE = FOV / Width;

var mapOffX = Math.floor(Width / 2) - 149;
var mapOffY = 4

let Pad = Pads.get();
function Player() {

    var playerMoveX = 0;
    var playerMoveY = 0;
    var playerMoveAngle = 0;

    playerMoveX = 0, playerMoveY = 0, playerMoveAngle = 0;  
    Pad = Pads.get();
    if (Pad.ly > 25) {
        playerMoveX = -1;
        playerMoveY = -1;
    }
    if (Pad.ly < -25) {
        playerMoveX = 1;
        playerMoveY = 1;
    } 
    if (Pad.rx < -25) {
        playerMoveAngle = 1;
    } 
    if (Pad.rx > 25) {
        playerMoveAngle = -1;
    }

    var playerOffX = Math.sin(playerAngle);
    var playerOffY = Math.cos(playerAngle);

    var mapTargetX = Math.floor(playerY / MapScale) * MapSize + Math.floor((playerX + playerOffX * playerMoveX) / MapScale);
    var mapTargetY = Math.floor((playerY + playerOffY * playerMoveY) / MapScale) * MapSize + Math.floor(playerX / MapScale);

    if (playerMoveX && map[mapTargetX] == 0)  {
        playerX += playerOffX * playerMoveX;
    }
    if (playerMoveY && map[mapTargetY] == 0)  {
        playerY += playerOffY * playerMoveY;
    }
    if (playerMoveAngle) {
        playerAngle += 0.06 * playerMoveAngle;
    }

    var PlayerMapX = (playerX / MapScale) * 5 + mapOffX;
    var PlayerMapY = (playerY / MapScale) * 5 + mapOffY;

    var currentAngle = playerAngle + HALF_FOV;
    var rayStartX = Math.floor(playerX / MapScale) * MapScale;
    var rayStartY = Math.floor(playerY / MapScale) * MapScale;

    for (var ray = 0; ray < Width; ray++) {
    var currentSin = Math.sin(currentAngle);
    currentSin = currentSin ? currentSin : 0.0000001;
    var currentCos = Math.cos(currentAngle);
    currentCos = currentCos ? currentCos : 0.0000001;

    var rayEndX, rayEndY, rayDirectionX, verticalDepth;
    if (currentSin > 0) {
        rayEndX = rayStartX + MapScale;
        rayDirectionX = 1;
    } else {
        rayEndX = rayStartX;
        rayDirectionX = -1;
    }
    for (var offset = 0; offset < MapRange; offset+= MapScale) {
        verticalDepth = (rayEndX - playerX) / currentSin;
        rayEndY = playerY + verticalDepth * currentCos;
        var mapTargetX = Math.floor(rayEndX / MapScale);
        var mapTargetY = Math.floor(rayEndY / MapScale);
        if (currentSin <= 0) {
            mapTargetX += rayDirectionX;
        }
        var targetSquare = mapTargetY * MapSize + mapTargetX;
        if (targetSquare < 0 || targetSquare > map.length - 1) {
            break
        }
        if (map[targetSquare] != 0) {
            break
        }
        rayEndX += rayDirectionX * MapScale;
    }
    
    var tempX = rayEndX;
    var tempY = rayEndY;

    var rayEndY, rayEndX, rayDirectionY, horizontalDepth;
    if (currentCos > 0) {
        rayEndY = rayStartY + MapScale;
        rayDirectionY = 1;
    } else {
        rayEndY = rayStartY;
        rayDirectionY = -1;
    }
    for (var offset = 0; offset < MapRange; offset+= MapScale) {
        horizontalDepth = (rayEndY - playerY) / currentCos;
        rayEndX = playerX + horizontalDepth * currentSin;
        var mapTargetX = Math.floor(rayEndX / MapScale);
        var mapTargetY = Math.floor(rayEndY / MapScale);
        if (currentCos <= 0) {
            mapTargetY += rayDirectionY;
        }
        var targetSquare = mapTargetY * MapSize + mapTargetX;
        if (targetSquare < 0 || targetSquare > map.length - 1) {
            break;
        }
        if (map[targetSquare] != 0) {
            break;
        }
        rayEndY += rayDirectionY * MapScale;
    }
    // Renderizar projeção 3d
    var depth = verticalDepth < horizontalDepth ? verticalDepth : horizontalDepth;
    depth *= Math.cos(playerAngle - currentAngle);

    var wallHeight = Math.min(MapScale * 300 / (depth + 0.0001), Height)
    Draw.rect(ray, Height / 2 - wallHeight / 2, 1, wallHeight, verticalDepth < horizontalDepth ? Color.new(40, 40, 40) : Color.new(30, 30, 30));
    currentAngle -= STEPANGLE;
    }
}
export function Update() {
  Player();
}
