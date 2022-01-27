// import Cards from "../components/cards";

export const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];

export function createDeck(values, suits) {
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
}

export function shuffleCards(shuffledDeck) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * shuffledDeck.length);
    let location2 = Math.floor(Math.random() * shuffledDeck.length);
    let tmp = shuffledDeck[location1];

    shuffledDeck[location1] = shuffledDeck[location2];

    shuffledDeck[location2] = tmp;
  }
  return shuffledDeck;
}
