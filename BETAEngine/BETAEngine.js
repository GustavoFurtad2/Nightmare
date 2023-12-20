import {Player} from "./Player.js"
import {Map} from "./Map.js"

export let Player = new Player;
var Spacecraft = new Map(8, 8, new Array (
    1,1,1,1,1,1,1,1,
    1,0,1,0,0,0,0,1,
    1,0,1,0,1,1,0,1,
    1,0,0,0,0,1,0,1,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,1,0,1,
    1,1,1,1,1,1,1,1
));

export function Render() {
    Spacecraft.DrawMap2d();
    Player.DrawRays3d();
}
