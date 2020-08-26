class Player {
    constructor(){
        this.index = null;
        this.distance = 0; 
        this.name = null;
        this.rank = null
    }
    
 getCount() { 
 var PlayerCountRef = database.ref('playerCount')
 PlayerCountRef.on("value",(data)=>{
     playerCount = data.val();
 });
}

updateCount (count) {
    database.ref('/').update({
        playerCount:count
    });
}

update (){
    var playerindex = "players/player" + this.index;
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
    });
}
static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data)=>{
        allPlayers= data.val();
    })
}
getRank() {
var playerRank = database.ref('rank')
playerRank.on("value",(data) =>{
    this.rank = data.val();
})
  
}
static updateRank(rank) {
    database.ref('/').update({
        rank: rank
    })
}

}