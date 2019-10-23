var Mover = function(){
  this.x= 400/2;
  this.y = 400/2;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3,3);
    this.y +=random(-3,3);
};

Mover.prototype.show = function(){
   
    fill(mouseX,mouseY,random(40)%10);
//     changed the color of the dots to make a more interesting rainbow 
  noStroke();
    ellipse(this.x, this.y,15,30);
  // changed the rectangles to ovals
};
