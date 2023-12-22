import { Player, render} from "./BETAEngine/BETAEngine.js";
import { Map } from "./BETAEngine/Map.js";
var Mapa = new Map(8, new Array(
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1]
));

function MovePlayer() {
  var Pad = Pads.get();
  if (Pad.ly < -25) {
    Player.WalkFront();
  }
  if (Pad.ly > 25) {
    Player.WalkBack();
  }
  if (Pad.rx < -25) {
    Player.TurnLeft();
  }
  if (Pad.rx > 25) {
    Player.TurnRight();
  }
}
while (true) {
    Screen.clear();
    render();
    Screen.flip();
}
