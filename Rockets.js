var population;
var lifespan = 250;
function setup(){
    createCanvas(400,300);
    rocket = new Rocket();
    population = new Population();
}

function draw(){
    background(0);
    population.run();
}

function Population(){
    this.rockets = [];
    this.popsize = 25;

    for(var i = 0; i<this.popsize; i++){
        this.rockets[i] = new Rocket();   
    }

    this.run = function(){
        for(var i=0;i<this.popsize;i++){
            this.rockets[i].update();
            this.rockets[i].show();

        }
    }
}

function DNA(){
    this.genes = [];
    for(var i =0;i<lifespan; i++){
        this.genes[i] = p5.Vector.random2D();
    }    
}
function Rocket(){
    this.pos = createVector(width/2, height);
    this.vel = createVector();
    this.acc = createVector();
    this.dna = new DNA();
    this.count = 0; 

    this.applyForce = function(force){
        this.acc.add(force);
    }
    this.update = function(){
        this.applyForce(this.dna.genes[this.count]);
        this.count++;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.show = function(){
        push();
        noStroke();
        fill(255,150); 
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0,0,50,10);
        pop();
    }
}