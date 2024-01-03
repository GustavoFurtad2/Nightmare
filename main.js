import {Player} from "./NightmareEngine/Player.js";
import {Map} from "./NightmareEngine/Map.js";
import {Engine} from "./NightmareEngine/BETAEngine.js";

let Player = new Player();
let Map = new Map();
let Engine = new Engine();

function Move() {
  var Pad = Pads.get();
  if (Pad.lx < - 25) {
    Player.WalkFront();
  }
  if (Pad.lx > 25) {
    Player.WalkBack();
  }
  if (Pad.rx < -25) {
    Player.TurnLeft();
  }
  if (Pad.rx > 25) {
    Player.TurnRight();
  }
  Engine.Move(Player);
}
Screen.setFrameCounter(true);

var font = new Font();
while (true) {
  Screen.clear();
  var fps = Screen.getFPS(16);
  font.print(10, 10, fps);
  Engine.Draw(Player);
  Screen.flip();
}
