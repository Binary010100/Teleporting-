//module alliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies= Matter.Bodies;
var Events = Matter.Events;
var Body = Matter.Body;

//create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine:engine,
    options:{
        background:'black',
        wireframes: false
    }
})

//controls
document.addEventListener("keypress", controlls);
function controlls(e){
    console.log(e);
    if(e.key == "w")
    {
         Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: -0.035});

    }
    if(e.key == "d"){
        Body.applyForce( ball,{x: ball.position.x, y: ball.position.y}, {x: 0.035, y: 0});

       }
                if(e.key == "a"){
        Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: -0.035, y: 0});
    }
}
//creating the idiotic stuff
var ball = Bodies.circle(30,550,25,{label:"bot"});
var stat1 = Bodies.rectangle(10,400,10000,25,{isStatic: true, label:"yell"});
var ground= Bodies.rectangle(10,600,10000,25,{isStatic: true});
var por1 = Bodies.rectangle(700,500,50,175,{isStatic: true, label:"list"});
var por2= Bodies.circle(600,10,25,{isStatic: true});
var goal = Bodies.rectangle(10,250,25,50,{isStatic:true, label:"win"});
var kill= Bodies.circle(200,300,25,{label:"kill"});
var die= Bodies.circle(200,300,25,{label:"kill"});

ball.render.fillStyle = "#7fb3d5";
por1.render.fillStyle="#993333";
por2.render.fillStyle="purple";
ground.render.fillStyle="red";
stat1.render.fillStyle="red";
goal.render.fillStyle="green";


//adding all the bodies to the world
World.add(engine.world,[ball,stat1,ground,por1,por2,goal,kill,die]);

//run the engine
Engine.run(engine);

//run the renderer
Render.run(render);

//function handleCollision(e) {
 // e.pairs.forEach(pair => {
   // const { label: labelA } = pair.bodyA;
   // const { label: labelB } = pair.bodyB;
  //  if (labelA == 'bot' && labelB == 'list') {
    //Body.setPosition(ball, { x: 600, y:10 })


    //}
    //if(labelA == 'bot' && labelB == 'win'){
      //  alert("YOU WIN");
        //location.reload();
   // }
   // if (labelA == 'kill' && labelB == 'yell') {
      //  Body.setPosition(ball, { x: 600, y:10 })

    
 // });
    

//}};
//Events.on(engine, 'collisionStart', handleCollision);
function handleCollision(e) {
    e.pairs.forEach(pair => {
      const { label: labelA } = pair.bodyA;
      const { label: labelB } = pair.bodyB;
      if (labelA == 'bot' && labelB == 'list') {
      Body.setPosition(ball, { x: 540, y:50 })
  
  
      }
        if (labelA == 'bot' && labelB == 'act') {
             Body.setPosition(ball, { x: 40, y:50 })
  
  
      }
      
      if(labelA == 'bot' && labelB == 'win'){
          alert("YOU WIN");
          location.reload();
      }
      if(labelA == 'bot' && labelB == 'kill'){
        alert("YOU lose");
        location.reload();
    }
      
    });
      
  
  }
  Events.on(engine, 'collisionStart', handleCollision);