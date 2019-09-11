console.log("Up and running!");
// alert('Hello, friends.');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch(params) {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
            console.log("You found a match!");
        } else {
            alert("Sorry, try again.");
            console.log("Sorry, try again.")
        }
    };    
};

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
};

flipCard(0);
flipCard(2);