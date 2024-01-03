let MAP_SIZE = 16;
let MAP_SCALE = 10;
let MAP_RANGE = MAP_SCALE * MAP_SIZE;
let MAP = new Array(
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
);

export function SetMap(size, scale, map) {
    MAP_SIZE = size;
    MAP_SCALE = scale;
    MAP_RANGE = scale * size;
    MAP = map;
}

export class Player {
    X = 320;
    Y = 224;
    ANGLE = Math.PI / 2;
    MoveX = 0;
    MoveY = 0;
    MoveAngle = 0;
    OffsetX = Math.sin(this.ANGLE);
    OffsetY = Math.cos(this.ANGLE);

    MapTargetX = Math.floor(this.Y / MAP_SCALE) * MAP_SIZE + Math.floor((this.X + this.OffsetX) / MAP_SCALE);
    MapTargetY = Math.floor((this.Y + this.OffsetY) / MAP_SCALE) * MAP_SIZE + Math.floor(this.X / MAP_SCALE);

    constructor(x, y, angle) {
        this.X = x;
        this.Y = y;
        this.angle = angle;
    }

    GetMap() {
        return MAP;
    }

    GetMapScale() {
        return MAP_SCALE;
    }

    GetMapRange() {
        return MAP_RANGE;
    }

    GetMapSize() {
        return MAP_SIZE;
    }

    WalkFront() {
        this.MoveX = 1;
        this.MoveY = 1;
        this.OffsetX = Math.sin(this.ANGLE);
        this.OffsetY = Math.cos(this.ANGLE);
    }
    WalkBack() {
        this.MoveX = -1;
        this.MoveY = -1;
        this.OffsetX = Math.sin(this.ANGLE);
        this.OffsetY = Math.cos(this.ANGLE);
    }
    TurnLeft() {
        this.MoveAngle = 1;
    }
    TurnRight() {
        this.MoveAngle = -1;
    }
}
