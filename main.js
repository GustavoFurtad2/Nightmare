/*
 Cosmos a game for Athena Discord Server Game jam
 By Gustavo Furtado
*/

import * as map from "./map.js"; map.Update;

let font = new Font();
font.size = 0.75;

const canvas = Screen.getMode();
canvas.mode = DTV_480p;
Screen.setMode(canvas);

while (true) {
  Screen.clear();

  map.Update();
  var freeVram = Screen.getFreeVRAM();
  font.print(330, 10, "Freevram: " + freeVram + " kb");
  Screen.flip();
}
