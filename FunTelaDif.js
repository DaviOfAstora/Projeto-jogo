//d = dist(Cxvoltar, Cyvoltar, mouseX,mouseY);
//d1 = dist(Cxvoltar, Cyvoltar, mouseX,mouseY);
var textofacil= 'Facil: jogo apresenta somente 2 alternativas para responder em 10 segundos'
var textomed='Médio: são 3 alternativas para responder em 7 segundos'
var textodif='Difícil: são 5 alternativas para responder em 5 segundos'

var xcolDif=21, xcol2Dif=179 , xcol3Dif=340 , ylinDif=137 , altRectDif=48 , larRectDif=139


function ScreenDif(){
  background(imgDif)
  push()
  textFont(fonte1)
  textSize(25)
  fill(250)
  text('Dificuldade',xcolDif+larRectDif/2,115)
  
  textFont(fonte1)
  textSize(15)
  textAlign(CENTER,CENTER)
  fill(250)
  text('Fácil',xcolDif+larRectDif/2,ylinDif+altRectDif/2)

  textFont(fonte1)
  textSize(15)
  textAlign(CENTER,CENTER)
  fill(250)
  text('Médio',xcol2Dif+larRectDif/2,ylinDif+altRectDif/2) 

  textFont(fonte1)
  textSize(15)
  textAlign(CENTER,CENTER)
  fill(250)
  text('Difícil',xcol3Dif+larRectDif/2,ylinDif+altRectDif/2)
  pop()
  
  push()
  if(mouseX>=xcolDif &&
    mouseX<=xcolDif+larRectDif &&
    mouseY>=ylinDif&&
    mouseY<=ylinDif+altRectDif){
    stroke(250)}
  else{
    noStroke()}
  noFill()
  rect(xcolDif, ylinDif, larRectDif, altRectDif )
  
  if(mouseX>=xcol2Dif &&
    mouseX<=xcol2Dif+larRectDif &&
    mouseY>=ylinDif&&
    mouseY<=ylinDif+altRectDif){
    stroke(250)}
  else{
    noStroke()}
  noFill()
  rect(xcol2Dif, ylinDif, larRectDif, altRectDif )
  
  if(mouseX>=xcol3Dif &&
    mouseX<=xcol3Dif+larRectDif &&
    mouseY>=ylinDif&&
    mouseY<=ylinDif+altRectDif){
    stroke(250)}
  else{
    noStroke()}
  noFill()
  rect(xcol3Dif, ylinDif, larRectDif, altRectDif )
  
  pop()
  
  push()
  if(d<=raio){
    push();
    noFill();
    strokeWeight(3);
    stroke(250);
    circle(Cxvoltar,Cyvoltar,raio*2);
    pop();
    if(mouseIsPressed){
    telaAtual=0
    } 
  }
    if(d1<=raio){
      push();
    noFill();
    strokeWeight(3);
    stroke(250);
    circle(Cxduvida,Cyduvida,raio*2);
    pop();
     textFont(fonte1)
      textSize(15)
      fill(250)
      text(textofacil,250,245,180,150)
      text(textomed,250,320,180,150)
      text(textodif,250,377,180,150)
      }
  pop()
}

