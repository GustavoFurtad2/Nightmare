import {mapSet} from "./Player.js";

var font = new Font();
export class Map {
    mapW = 0;
    mapH = 0;
    mapS = 0;
    map = []

    constructor(width, height, map) {
        this.mapW = width;
        this.mapH = height;
        this.mapS = width * height;
        this.map = map;
        mapSet(width, height, map)
    }

    DrawMap2d() {
        var x, y, yo, xo;
        for (y = 0; y <= this.mapH; y++) {
            for (x = 0; x <= this.mapW; x++) {
                xo = x * this.mapS;
                yo = y * this.mapS;
                if (this.map[y * this.mapW + x] == 1) {
                    Draw.rect(xo + 1, yo + 1, xo + this.mapS, yo + this.mapS, Color.new(255, 255, 255))
                }
            }
        }
    }
}
