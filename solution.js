
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
            this.drawPile = shuffle(this.discardPile)
        }
        let card = this.drawPile.shift()
        console.log(`${this.name} (${this.drawPile.length + 1 } cards): ${card}`) // ${this.drawPile.length + 1
        return card
    }

    playerCards() {
        return this.drawPile.length + this.discardPile.length
    }
}

function nextRound(player1, player2, reportedCards) {
    console.log('\n')
    card1 = player1.drawCard()
    card2 = player2.drawCard()
    if (card2 < card1) {
        winner = player1.name
        player1.discardPile.unshift(card1, card2)
        player1.discardPile.push(...reportedCards)
        reportedCards = []
    } else if (card2 > card1){
        winner = player2.name
        player2.discardPile.unshift(card1, card2)
        player2.discardPile.push(...reportedCards)
        reportedCards = []
    } else {
        reportedCards.push(card1, card2)
        console.log("No winner in this round")
        return reportedCards
    }
    console.log(`${winner} wins this round`)
    return reportedCards
}

module.exports = { createDeck, shuffle, Player, nextRound };