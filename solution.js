
// fill deck with 4 cards of each number from 1 to 10
function createDeck() {
    let arr = []
    for (let i = 1; i <= 10; i++) {
        arr.push(...[i, i, i, i])
    }
    return arr
}

// shuffle function
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

class Player {

    constructor(name, arr1, arr2) {
        this.name = name;
        this.drawPile = arr1;
        this.discardPile = arr2;
    }

    drawCard() {
        if (this.drawPile.length == 0) {
            if (this.discardPile.length > 0) {
                this.drawPile = shuffle(this.discardPile)
            } else {
                return 0
            }
        }
        return this.drawPile.pop()
    }

    playerCards() {
        return this.drawPile.length + this.discardPile.length
    }
}

// main 
console.log("Start game...")

cardsDeck = shuffle(createDeck())

player1 = new Player("Player 1", cardsDeck.slice(0,19), [])
player2 = new Player("Player 2", cardsDeck.slice(20,39), [])

reportedCards = []

while (player1.playerCards()>0 && player2.playerCards()>0) {

    card1 = player1.drawCard()
    card2 = player2.drawCard()

    console.log(`\n${player1.name} (${player1.playerCards()} cards): ${card1}`)
    console.log(`${player2.name} (${player2.playerCards()} cards): ${card2}`)

    let winner = ""
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
}

module.exports = { createDeck, shuffle, Player };