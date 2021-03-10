var BG,greeting,button;


function preload (){
BG = loadImage ("BG.jpg");
}
function setup(){
    canvas = createCanvas (800,2800);
    button =new Botton();
}
function draw (){
    background (BG);

   button.display();

    fill(255);
    text ("If you are a student complite a book or read a book",60,150);
    text ("And",185,200);
    text ("If you are not a student then read a news paper",70,250);
}