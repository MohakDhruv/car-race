class Game {
    constructor(){
        
    }


 getState() {
   var gameStateRef = database.ref('gameState');
   gameStateRef.on("value", function(data){
       gameState = data.val(); 
   });
}

 update(state) {
    database.ref('/').update({
        gameState:state
    })

 }

 async start(){
   if(gameState === 0) {
       player = new Player();
       var playerCountRef = await database.ref('playerCount').once("value"); 
       if(playerCountRef.exists()){
           playerCount= playerCountRef.val();
           player.getCount();
        }
     
       form = new Form();
       form.display();
   }
   car1 = createSprite(100,200);
   car1.addImage("image", car1IMG);
   car2 =createSprite(200,200);
   car2.addImage("Images", car2IMG);
   car3 = createSprite(500,200);
   car3.addImage("images",car3IMG);
   car4 = createSprite(700,200);
   car4.addImage("Image",car4IMG);
   cars = [car1, car2, car3, car4]

}

play(){ 
form.hide(); 
Player.getPlayerInfo();
player.getRank();
if(allPlayers !== undefined){
    background("purple");
    image(bg,0,-displayHeight*3,displayWidth,displayHeight*4);
    /*   var yPos = 130;*/
 var index = 0;
 var x = 200;
var y;
    for (var plr in allPlayers){
        index = index+1;
        x = x+300;
        y = displayHeight- allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
    
        if(plr === "player"+player.index){
            stroke(10);
            fill("blue");
        
            ellipse(x,y,60,60);
          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y 
    
    }
       
        
   
    }

}
if(keyIsDown(UP_ARROW ) && player.index!== null){
    player.distance += 15;
    player.update();

}
if (player.distance > 4155){
    gameState = 2;
    player.rank += 1;
    Player.updateRank(player.rank);
}


drawSprites();
}
end(){
    //console.log(player.rank)
}
    }