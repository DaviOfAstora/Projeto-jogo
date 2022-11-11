var imgMenu,imgCred,imgComo,imgDif,imgInfo;
var fonte1;
var telaAtual=0;
var Cxvoltar=36, Cyvoltar=33, raio = 19, d, d1, Cxduvida=462, Cyduvida=461

function preload() { 
  imgMenu = loadImage('ImagensMenu/MenuNomeJogo.png');
  imgCred = loadImage('ImagensMenu/creditos.png');
  imgComo = loadImage('ImagensMenu/Comojogar.png');
  imgDif= loadImage('ImagensMenu/modosdejogosimples.png');
  imgInfo = loadImage('ImagensMenu/infomarcoes.png');
  imgmouse = loadImage('ImagensMenu/mouse.png');
  imgeu = loadImage('ImagensMenu/eu.jpg');
  fonte1 = loadFont('Fontes/ComingSoon-Regular.ttf');
}

/*textAlign(CENTER, CENTER);
  textFont(fonte1);
  textSize(20);
  text("Jogar", x1col+(larRectMenu/2), y1linha+(altRectMenu/2));*/

function setup() {
  createCanvas(500, 500);
}

function draw() {
  d = dist(Cxvoltar, Cyvoltar, mouseX,mouseY);
  d1 = dist(Cxduvida, Cyduvida, mouseX,mouseY);
  if(telaAtual===0){
    Menu()
    
  }
  else if(telaAtual===1){
    ScreenDif()
   
  }
  
  else if(telaAtual===2){
    telaCred()
   
  }
  
  else if(telaAtual===3){
    telaComo()
   
  }
  
  else if(telaAtual===4){
    telaInfo()
   
  }
  
 /* push()
  fill(255);
    textSize(12);
    text(mouseX+':'+mouseY,30,23);
  pop()*/

}