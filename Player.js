import {Player} from "./BETAEngine/BETAEngine.js"

export function MovePlayer() {
    var Pad = Pads.get();
    if (Pad.rx < -25) {
        Player.TurnLeft();
    }
    if (Pad.rx > 25) {
        Player.TurnRight();
    }
    if (Pad.ly < -25) {
        Player.WalkFront();
    }
    if (Pad.ly > 25) {
        Player.WalkBack();
    }
}
