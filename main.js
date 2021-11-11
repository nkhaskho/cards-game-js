const mySolution = require("./solution");
// import { Player, createDeck, shuffle } from "./solution";
const Player = mySolution.Player
const shuffle = mySolution.shuffle
const createDeck = mySolution.createDeck

// main 
console.log("Start game...")

cardsDeck = shuffle(createDeck())

player1 = new Player("Player 1", cardsDeck.slice(0,20), [])
player2 = new Player("Player 2", cardsDeck.slice(20,40), [])

// global variable to store reported cards to be pushed in the next round
let reportedCards = []
// Winner (player) name
let winner = ""

while (player1.playerCards()>0 && player2.playerCards()>0) {

    console.log('\n')

    card1 = player1.drawCard()
    card2 = player2.drawCard()

    if (card2 < card1) {
        winner = player1.name
        player1.discardPile.push(card1, card2)
        player1.discardPile.push(...reportedCards)
        reportedCards = []
    } else if (card2 > card1){
        winner = player2.name
        player2.discardPile.push(card1, card2)
        player2.discardPile.push(...reportedCards)
        reportedCards = []
    } else {
        reportedCards.push(card1, card2)
        console.log("No winner in this round")
        continue
    }
    console.log(`${winner} wins this round`)
    //console.log(player1.drawPile)
}

console.log(`\n${winner} wins the game!`)
