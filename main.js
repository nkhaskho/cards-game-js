const mySolution = require("./solution");
const Player = mySolution.Player
const shuffle = mySolution.shuffle
const createDeck = mySolution.createDeck
const nextRound = mySolution.nextRound

// main 
console.log("Start game...")

cardsDeck = shuffle(createDeck())

player1 = new Player("Player 1", cardsDeck.slice(0,20), []) // 
player2 = new Player("Player 2", cardsDeck.slice(20,40), []) // 

// global variable to store reported cards to be pushed in the next round
let reportedCards = []

let winner = ""

while (player1.playerCards()>0 && player2.playerCards()>0) {
    reportedCards = nextRound(player1, player2, reportedCards)
    // console.log(player1.drawPile)
}

console.log(`\n${winner} wins the game!`)
