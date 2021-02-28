const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = []
var score = 0;
function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(550,800);
ground= new Ground(250,700,500,20);
wall1 = new Division(10,570,20,250);
wall2 = new Division(110,570,20,250);
wall3 = new Division(220,570,20,250);
wall4= new Division(330,570,20,250);
wall5= new Division(440,570,20,250);

plinko1 = new Plinko(100,100);
plinko2 = new Plinko(145,100);
plinko3 = new Plinko(190,100);
plinko4 = new Plinko(230,100);
plinko5 = new Plinko(270,100);
plinko6 = new Plinko(310,100);
plinko7 = new Plinko(350,100);
plinko8 = new Plinko(390,100);
plinko9 = new Plinko(100,200);
plinko10 = new Plinko(145,200);
plinko11 = new Plinko(190,200);
plinko12 = new Plinko(230,200);
plinko13 = new Plinko(270,200);
plinko14= new Plinko(310,200);
plinko15= new Plinko(350,200);
plinko16= new Plinko(390,200);
plinko17= new Plinko(100,300);
plinko18= new Plinko(145,300);
plinko19= new Plinko(190,300);
plinko20= new Plinko(230,300);
plinko21= new Plinko(270,300);
plinko22= new Plinko(310,300);
plinko23= new Plinko(350,300);
plinko24= new Plinko(390,300);


}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
 ground.display();
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();

plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
plinko20.display();
plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();

if(frameCount%60===0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); score++; }
for (var j = 0; j < particles.length; j++) { particles[j].display(); }

}