var population;
var lifespan = 400;
var count = 0;
var lifeP;
var target;
var maxForce = 0.2;


var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup(){
    createCanvas(400,300);
   // rocket = new Rocket();
    population = new Population();
    lifeP = createP();
    target = createVector(width/2, 50);
}

function draw(){
    background(0);
    population.run();
    lifeP.html(count);
    
    count++;
    if(count == lifespan){
        population.evaluate();
        population.selection();
        // population = new Population();
    count = 0;
    }
    fill(255);
    rect(rx,ry,rw,rh);

    ellipse(target.x, target.y, 16,16);

}
