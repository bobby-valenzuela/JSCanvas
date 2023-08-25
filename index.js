// Import Matter library and relevant bits
const { Engine, Render, Runner, World, Bodies} = Matter;

///// SETUP

// Create engine + extract world
const engine = Engine.create();
const { world }  = engine;

// Associate render to document
const render =  Render.create({
    element: document.body,
    engine: engine,
    options:{
        width: 800,
        height: 600
    }
});



///// ADDING SHAPES

// Create shape
const shape = Bodies.rectangle(200,200,50,50, {
    isStatic: true
});

// Add shape
World.add(world,shape);



///// RENDERING OUR WORLD

// Render our render object to screen
Render.run(render);
// Apply engine
const runner = Runner.create();
Render.run(runner,engine);



