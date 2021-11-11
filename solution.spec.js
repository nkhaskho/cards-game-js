
const myImpl = require("./solution");


describe("Task 1: Create a shuffled deck of cards", () => {
    // 1st test case
    test("A new deck should contain 40 cards", () => {
        expect(myImpl.createDeck().length).toBe(40);
    });
    // 2nd test case
    test("A shuffle function should shuffle a deck", () => {
        let deck = myImpl.createDeck();
        deck = myImpl.shuffle(deck);
        // TODO: to be reviewed ???
        expect(deck[0]).not.toBe(1);
    });
});


describe("Task 2: Draw cards", () => {
    test("If a player with an empty draw pile tries to draw a card, the discard pile is shuffled into the draw pile", () => {
        player = new myImpl.Player("Player 1", [], [1, 2, 3]);
        player.drawCard(); // after shuffling, drawPile = [3, 2, 1]
        expect(player.drawPile.length).toEqual(2); 
    });
});

/* . When comparing two cards, the higher card should win
. When comparing two cards of the same value, the winner of the next round should win 4 cards
*/

describe("Task 3: Playing a turn", () => {
    test("When comparing two cards, the higher card should win", () => {
        player1 = new myImpl.Player("Player 1", [4, 4], []);
        player2 = new myImpl.Player("Player 2", [], [5, 7]);
        card1 = player1.drawCard()
        card2 = player2.drawCard()
        expect(card1<card2).toEqual(true); 
    });
    test("When comparing two cards of the same value, the winner of the next round should win 4 cards", () => {
        player1 = new myImpl.Player("Player 1", [5, 4], []);
        player2 = new myImpl.Player("Player 2", [5, 9], []);
        reportedCards = []
        // round 1, equality => 2 reported cards
        reportedCards = myImpl.nextRound(player1, player2, reportedCards)
        // round 2
        reportedCards = myImpl.nextRound(player1, player2, reportedCards)
        expect(player2.playerCards()).toEqual(4); 
    });
});

