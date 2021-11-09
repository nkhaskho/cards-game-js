
const myImpl = require("../myImpl");


describe("Task 1: Create a shuffled deck of cards", () => {
    // 1st test case
    test("A new deck should contain 40 cards", () => {
        expect(myImpl.createDeck().length).toBe(40);
    });
    // 2nd test case
    test("A shuffle function should shuffle a deck", () => {
        let deck = myImpl.createDeck();
        deck = myImpl.shuffle(deck);
        // TODO: to be reviewed
        expect(deck[0]).not.toBe(1);
    });
});


describe("Task 2: Draw cards", () => {
    test("If a player with an empty draw pile tries to draw a card, the discard pile is shuffled into the draw pile", () => {
        player = new myImpl.Player("Player 1", [], [1, 2, 3]);
        player.drawCard(); // after draw card, drawPile = [2, 3]
        expect(player.drawPile.length).toEqual(2); 
    });
});

