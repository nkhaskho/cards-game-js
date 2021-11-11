
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
        let card = this.drawPile.pop() // || 0
        console.log(`${this.name} (${this.drawPile.length + 1 } cards): ${card}`) // ${this.drawPile.length + 1
        return card
    }

    playerCards() {
        return this.drawPile.length + this.discardPile.length
    }
}

module.exports = { createDeck, shuffle, Player };