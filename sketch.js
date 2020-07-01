const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine, world

var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var count = 0;
var turn = 0;


var gamestate = "START";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 75; j <= width; j = j + 70) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 70) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 70) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 70) {

    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20)
  fill("yellow")
  text("Score:" + count, 20, 30);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  for (var j = 0; j < particle.length; j++) {
    particle[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }


}




function mousePressed() {
  if (gamestate !== "END") {
    particle.push( new Particle(mouseX, 0, 15));
    count = count + 100
  }
}