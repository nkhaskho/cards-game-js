/*
Task 1: Create a shuffled deck of cards

Each card shows a number from 1 to 10. Each number is in the deck four times for a total of 40 cards. 
At the beginning of the game, the deck is shuffled (Hint: Look up Fisher-Yates Shuffle Algorithm) to
make sure it is in a random order. 
Each player receives a stack of 20 cards from the shuffled deck as their draw pile. 
The draw pile is kept face-down in front of the player. Each player also keeps a discard pile (see "Task 3" for more).
*/


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
        return this.drawPile.pop()
    }
}

module.exports = { createDeck, shuffle, Player };