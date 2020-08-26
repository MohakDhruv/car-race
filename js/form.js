class Form {
constructor(){
   this.input = createInput("name")
this.button = createButton("play")
this.reset = createButton("reset")
this.greeting = createElement('h3');
}
display(){
    var title = createElement('h2')
    title.html("CAR RACING GAME" )
    title.position(displayWidth/2-50,0);
   
   this.input.position(displayWidth/2,144);
   
   this.button.position(displayWidth/2+55,200);
   
   this.reset.position(displayWidth/2-100,20);
   this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    database.ref('/').update({
        players:null
    })
   })
  this.button.mousePressed(()=>{
        this.input.hide();
      this.button.hide();
       player.name =this.input.value();
        playerCount += 1
        player.index = playerCount
        player.update();
        player.updateCount(playerCount);
       
        this.greeting.html("Hello, Welcome To Your Game:" + player.name)
        this.greeting.position(displayWidth/2,);
    })
}
hide () {
this.greeting.hide();
this.input.hide();
this.button.hide();
}
}