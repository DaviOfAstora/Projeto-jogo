var larRectMenu=188, altRectMenu=64, x1col=45, x2col=275,y1linha=240, y2linha=310;


function Menu(){
  background(imgMenu);
  push()
  textAlign(CENTER, CENTER);
  textFont(fonte1);
  fill(250);
  textSize(20);
  text("Jogar", x1col+(larRectMenu/2), y1linha+(altRectMenu/2));
  text("Créditos", x1col+(larRectMenu/2), y2linha+(altRectMenu/2));
  text("Como jogar", x2col+(larRectMenu/2), y1linha+(altRectMenu/2));
  text("Informações", x2col+(larRectMenu/2), y2linha+(altRectMenu/2));
  
  pop()
  
  push()
  if(mouseX>=x1col &&
     mouseX<=x1col+larRectMenu &&
     mouseY>=y1linha&&
     mouseY<=y1linha+altRectMenu){
    
    stroke(250);
    if(mouseIsPressed){
      telaAtual=1
    }
    
}
  
  else{
    noStroke();
  }
  strokeWeight(3);
  noFill();
  rect(x1col,y1linha,larRectMenu,altRectMenu,5);
  
  if(mouseX>=x1col &&
     mouseX<=x1col+larRectMenu &&
     mouseY>=y2linha&&
     mouseY<=y2linha+altRectMenu){
      
    stroke(250);
    if(mouseIsPressed){
      telaAtual=2
    }
  }
  
  else{
    noStroke();
  }
  strokeWeight(3)
  noFill();
  rect(x1col,y2linha,larRectMenu,altRectMenu,5);
  
  if(mouseX>=x2col &&
     mouseX<=x2col+larRectMenu &&
     mouseY>=y1linha&&
     mouseY<=y1linha+altRectMenu){
      
    stroke(250);
    if(mouseIsPressed){
      telaAtual=3
    }
    
  }
  
  else{
    noStroke();
  }
  strokeWeight(3)
  noFill();
  rect(x2col,y1linha,larRectMenu,altRectMenu,5);
  
  if(mouseX>=x2col &&
     mouseX<=x2col+larRectMenu &&
     mouseY>=y2linha&&
     mouseY<=y2linha+altRectMenu){
      
     stroke(250);
    if(mouseIsPressed){
      telaAtual=4
    }
  }
  
  else{
    noStroke();
  }
  strokeWeight(3)
  noFill();
  rect(x2col,y2linha,larRectMenu,altRectMenu,5);
  
  pop()
}

  
  

