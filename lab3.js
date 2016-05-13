function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    
   var ctx = canvas.getContext('2d');
    //declare x and y as variables here
    //assign each a value of 0
  
    
    
   //call the drawChar(x,y) function here

  }
}

    
    
    
    //add a function header here. the 
    //function should be named drawChar(x,y)
    var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
        
    //add a +x to each x coordinate
    //add a +y to each y coordinate
    ctx.fillStyle="green";
    ctx.fillRect(25,25,100,100);
    
    ctx.fillStyle="yellow";
    ctx.fillRect(30, 30, 20, 10);
    ctx.fillRect(60, 30, 20, 10);
    
    ctx.fillStyle="red";
    ctx.beginPath();
    ctx.moveTo(4, 40);
    ctx.lineTo(60, 40);
    ctx.lineTo(50, 60);
    ctx.fill();
  }
