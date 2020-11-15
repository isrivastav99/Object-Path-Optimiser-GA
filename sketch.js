var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  let canv = createCanvas(400, 300);
  canv.position(350,0);
  population = new Population();
  lifeP = createP();
  timer = createP();
  target = createVector(width / 2, 50);
  


}
let time = 0;
function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html('Life Count : ');
  lifeP.html(count, true);
  timer.html('Time elapsed: ');
  let m = time/60;
  
  let t = m.toString();
  let mi = parseInt(t);
  timer.html(mi/60, true);
  
  timer.html(' minutes ', true);
  timer.html(time%60, true);
  timer.html(' seconds ', true);
  if (frameCount % 60 == 0){
  time++;
  }

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
