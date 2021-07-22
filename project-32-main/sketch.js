const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getbackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);



}
async function getbackgroundImg(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
 var responsejson=await response.json();
 var datetime=responsejson.datetime;
 var hour=datetime.slice(11,13)

    console.log(datetime+"  " +hour);

    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }
    if(hour>=12 && hour<=14){
        bg = "sunrise5.png";
    }else if(hour>=14 && hour<=16){
        bg = "sunrise6.png";
    }
    if(hour>=14 && hour<=16){
        bg = "sunrise7.png";
    }else if(hour>=16 && hour<=18){
        bg = "sunrise8.png";
    }
    if(hour>=18 && ho5ur<=20){
        bg = "sunrise9png";
    }
    else if(hour>=23 && hour==0){
        bg = "sunset10.png";
    }else if(hour>=0 && hour==03){
        bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);

} 