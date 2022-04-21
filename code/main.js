import kaboom from "kaboom"

// initialize context & sprites
kaboom({
width: 512,
height: 448,
background: [0,0,0]
});
layers([
    "bg",
    "obj",
    "ui",
], "obj") //obj is default layer

loadSprite("batman", "sprites/batman.png")

// Batman sequence at the beginning
const kaboomBatman = add([
  sprite("batman"),
  origin("center"),
  pos(width()/2, height()/2),
  scale(0),
]);
let batSize = 0
setInterval(function(){
  batSize += .02
  kaboomBatman.scale = batSize;
  }, 15);

// Start game UI (Remeber to add layer("ui"))

// add a kaboom on mouse click
