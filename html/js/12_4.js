let deck = {
  suits: ["黑桃", "红心", "梅花", "方片"],
  cards: Array(52),
  pick: function () {
    // NOTE: the line below is now an arrow function, allowing us to capture 'this
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
let cardPicker = deck.pick();
let pickedCard = cardPicker();
console.log(pickedCard.suit + pickedCard.card)
