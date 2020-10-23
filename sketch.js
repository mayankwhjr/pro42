var umbrella

function preload(){
    
}

function setup(){
    createCanvas(250, 500);
    var maxDrops=100;
    
 umbrella= new Umbrella(100,240,50) 
 var drops=[]
 for(var i=0;i<maxDrops;i++){
drops.push(new Drop(random(0,400),random(0,400)));
} 
   rain.update(); 
}

function draw(){
    background("black");
    rand=Math.round(random(1,4))
    if(frameCount%80===0){
thunderCreatedFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10)
switch(rand){
    case 1:thunder.addImage("thunder1.jpg");
    break;
    case 2:thunder.addImage("thunder2.jpg");
    break;
    case 3:thunder.addImage("thunder3.jpg");
break;
case 4:thunder.addImage("thunder4.jpg");
break;
default:break;


        
}
    }
    umbrella.display(); 
    
}   

