class Player{
    constructor(){
        
    }
    getCount(){
        var ref = database.ref('playerCount')
        ref.on("value",function(data){
            playerCount = data.val();
        });
    }
    update(name){
        var playerIndex = "Player"+playerCount
        database.ref(playerIndex).set({
            name:name
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
}