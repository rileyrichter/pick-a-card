$(document).ready(function () {
  $.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1", function (
    data
  ) {
    const suit = data.cards[0].suit;
    const value = data.cards[0].value;
    const image = data.cards[0].image;
    console.log(suit);
    console.log(value);
    console.log(image);
  });
});
