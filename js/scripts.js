$(document).ready(function () {
  // Suits for the cards.
  const suits = ["clubs", "diamonds", "hearts", "spades"];

  // Ranks for the cards.
  const ranks = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];

  // Deck which includes 13 cards for each suit (4), for a total of 52 cards.
  const deck = [];
  // For each suit..
  suits.forEach(function (suit) {
    // There are 13 ranks
    ranks.forEach(function (rank, index) {
      // Add this to the deck
      deck.push(ranks[index] + " of " + suit);
    });
  });

  // Display cards to html page.
  deck.forEach(function (card) {
    $("#cards").append("<li>" + card + "</li>");
  });
});
