const WIDTH = 640;
const HEIGHT = 448;

const DOUBLE_PI = 2 * Math.PI;
let FOV = Math.PI / 3;
let HALF_FOV = FOV / 2;
let STEP_ANGLE = FOV / WIDTH;

export class Engine {

    Move(Player) {
    if (Player.MoveX != 0 && Player.GetMap()[Player.MapTargetX] == 0) {
        Player.X += Player.OffsetX * Player.MoveX;
    }
    if (Player.MoveY != 0 && Player.GetMap()[Player.MapTargetY] == 0) {
        Player.Y += Player.OffsetY * Player.MoveY;
    }
    if (Player.MoveAngle != 0) {
        Player.ANGLE += 0.03 * Player.MoveAngle;
    }
    }

    Draw(Player) {
        var currentAngle = Player.ANGLE + HALF_FOV;
        var MAP_SCALE = Player.GetMapScale();
        var MAP_RANGE = Player.GetMapRange();
        var MAP = Player.GetMap();

        var rayStartX = Math.floor(Player.X / MAP_SCALE) * MAP_SCALE;
        var rayStartY = Math.floor(Player.Y / MAP_SCALE) * MAP_SCALE;

        for (var ray = 0; ray < WIDTH; ray++) {
            var currentSin = Math.sin(currentAngle);
            currentSin = currentSin ? currentSin : 0.000001;
            var currentCos = Math.cos(currentAngle);
            currentCos = currentCos ? currentCos : 0.000001;

            var rayEndX, rayEndY, rayDirectionX, verticalDepth;

            if (currentSin > 0) {
                rayEndX = rayStartX + MAP_SCALE;
                rayDirectionX = 1;
            } else {
                rayEndX = rayStartX;
                rayDirectionX = -1;
            }
            // horizontal
            for (var offset = 0; offset < MAP_RANGE; offset += MAP_SCALE) {
                verticalDepth = (rayEndX - Player.X) / currentSin;
                rayEndY = Player.Y + verticalDepth * currentCos;
                var MapTargetX = Math.floor(rayEndX / MAP_SCALE);
                var MapTargetY = Math.floor(rayEndY / MAP_SCALE);

                if (currentSin <= 0) {
                    MapTargetX += rayDirectionX;
                }
                var TargetSquare = MapTargetY * Math.sqrt(Player.GetMapSize()) + MapTargetX;
                if (TargetSquare < 0 || TargetSquare > MAP.Length - 1) break;
                if (MAP[TargetSquare] != 0) break;
                rayEndX += rayDirectionX * MAP_SCALE;

            }
            // vertical
            var rayEndX, rayEndY, rayDirectionX, rayDirectionY, horizontalDepth;

            if (currentCos > 0) {
                rayEndY = rayStartY + MAP_SCALE;
                rayDirectionY = 1;
            } else {
                rayEndY = rayStartY;
                rayDirectionY = -1;
            }
            for (var offset = 0; offset < MAP_RANGE; offset += MAP_SCALE) {
                horizontalDepth = (rayEndY - Player.Y) / currentCos;
                rayEndX = Player.X + horizontalDepth * currentSin;
                var MapTargetX = Math.floor(rayEndX / MAP_SCALE);
                var MapTargetY = Math.floor(rayEndY / MAP_SCALE);

                if (currentCos <= 0) {
                    MapTargetY += rayDirectionY;
                }
                var TargetSquare = MapTargetY * Math.sqrt(Player.GetMapSize()) + MapTargetX;
                if (TargetSquare < 0 || TargetSquare > MAP.Length - 1) break;
                if (MAP[TargetSquare] != 0) break;
                rayEndY += rayDirectionY * MAP_SCALE;

            }

            var endX = verticalDepth < horizontalDepth ? tempX : rayEndX;
            var endY = verticalDepth < horizontalDepth ? tempY : rayEndY;

            currentAngle -= STEP_ANGLE;
            var depth = verticalDepth < horizontalDepth ? verticalDepth : horizontalDepth;

            var wallHeight = Math.min(MAP_SCALE * 300 / (depth + 0.0001), HEIGHT);
            Draw.rect(ray, HEIGHT / 2 - wallHeight / 2, 1, wallHeight, Color.new(40, 40, 40))
        }
    }
}
