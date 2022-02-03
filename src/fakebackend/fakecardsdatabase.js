export const cardDeck = [
  { value: "A", suit: "spades", cardImage: "../cardImages/spades-A.png" },
  { value: "2", suit: "spades", cardImage: "../cardImages/spades-2.png" },
  { value: "3", suit: "spades", cardImage: "../cardImages/spades-3.png" },
  { value: "4", suit: "spades", cardImage: "../cardImages/spades-4.png" },
  { value: "5", suit: "spades", cardImage: "../cardImages/spades-5.png" },
  { value: "6", suit: "spades", cardImage: "../cardImages/spades-6.png" },
  { value: "7", suit: "spades", cardImage: "../cardImages/spades-7.png" },
  { value: "8", suit: "spades", cardImage: "../cardImages/spades-8.png" },
  { value: "9", suit: "spades", cardImage: "../cardImages/spades-9.png" },
  { value: "10", suit: "spades", cardImage: "../cardImages/spades-10.png" },
  { value: "J", suit: "spades", cardImage: "../cardImages/spades-J.png" },
  { value: "Q", suit: "spades", cardImage: "../cardImages/spades-Q.png" },
  { value: "K", suit: "spades", cardImage: "../cardImages/spades-K.png" },
  { value: "A", suit: "diamonds", cardImage: "../cardImages/diamonds-A.png" },
  { value: "2", suit: "diamonds", cardImage: "../cardImages/diamonds-2.png" },
  { value: "3", suit: "diamonds", cardImage: "../cardImages/diamonds-3.png" },
  { value: "4", suit: "diamonds", cardImage: "../cardImages/diamonds-4.png" },
  { value: "5", suit: "diamonds", cardImage: "../cardImages/diamonds-5.png" },
  { value: "6", suit: "diamonds", cardImage: "../cardImages/diamonds-6.png" },
  { value: "7", suit: "diamonds", cardImage: "../cardImages/diamonds-7.png" },
  { value: "8", suit: "diamonds", cardImage: "../cardImages/diamonds-8.png" },
  { value: "9", suit: "diamonds", cardImage: "../cardImages/diamonds-9.png" },
  { value: "10", suit: "diamonds", cardImage: "../cardImages/diamonds-10.png" },
  { value: "J", suit: "diamonds", cardImage: "../cardImages/diamonds-J.png" },
  { value: "Q", suit: "diamonds", cardImage: "../cardImages/diamonds-Q.png" },
  { value: "K", suit: "diamonds", cardImage: "../cardImages/diamonds-K.png" },
  { value: "A", suit: "clubs", cardImage: "../cardImages/clubs-A.png" },
  { value: "2", suit: "clubs", cardImage: "../cardImages/clubs-2.png" },
  { value: "3", suit: "clubs", cardImage: "../cardImages/clubs-3.png" },
  { value: "4", suit: "clubs", cardImage: "../cardImages/clubs-4.png" },
  { value: "5", suit: "clubs", cardImage: "../cardImages/clubs-5.png" },
  { value: "6", suit: "clubs", cardImage: "../cardImages/clubs-6.png" },
  { value: "7", suit: "clubs", cardImage: "../cardImages/clubs-7.png" },
  { value: "8", suit: "clubs", cardImage: "../cardImages/clubs-8.png" },
  { value: "9", suit: "clubs", cardImage: "../cardImages/clubs-9.png" },
  { value: "10", suit: "clubs", cardImage: "../cardImages/clubs-10.png" },
  { value: "J", suit: "clubs", cardImage: "../cardImages/clubs-J.png" },
  { value: "Q", suit: "clubs", cardImage: "../cardImages/clubs-Q.png" },
  { value: "K", suit: "clubs", cardImage: "../cardImages/clubs-K.png" },
  { value: "A", suit: "hearts", cardImage: "../cardImages/hearts-A.png" },
  { value: "2", suit: "hearts", cardImage: "../cardImages/hearts-2.png" },
  { value: "3", suit: "hearts", cardImage: "../cardImages/hearts-3.png" },
  { value: "4", suit: "hearts", cardImage: "../cardImages/hearts-4.png" },
  { value: "5", suit: "hearts", cardImage: "../cardImages/hearts-5.png" },
  { value: "6", suit: "hearts", cardImage: "../cardImages/hearts-6.png" },
  { value: "7", suit: "hearts", cardImage: "../cardImages/hearts-7.png" },
  { value: "8", suit: "hearts", cardImage: "../cardImages/hearts-8.png" },
  { value: "9", suit: "hearts", cardImage: "../cardImages/hearts-9.png" },
  { value: "10", suit: "hearts", cardImage: "../cardImages/hearts-10.png" },
  { value: "J", suit: "hearts", cardImage: "../cardImages/hearts-J.png" },
  { value: "Q", suit: "hearts", cardImage: "../cardImages/hearts-Q.png" },
  { value: "K", suit: "hearts", cardImage: "../cardImages/hearts-K.png" },
];

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

// NOT IN USE CURRENTLY ************
//
// export function createDeck(values, suits) {
//   const deck = [];

//   for (let i = 0; i < suits.length; i++) {
//     for (let x = 0; x < values.length; x++) {
//       let card = {
//         value: values[x],
//         suit: suits[i],
//       };
//       deck.push(card);
//     }
//   }
//   return deck;
// }

//

// export const values = [
//   "A",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
// ];

// export const suits = ["spades", "diamonds", "clubs", "hearts"];
