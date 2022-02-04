/* eslint-disable no-unused-vars */
// GAME UTILITY FUNCTIONS

export function getHandTotal(contestantsHand) {
  function findNumberOfAces(contestantsHand) {
    let aces = contestantsHand.filter((card) => card.cardValue === 1);

    return aces.length;
  }

  function checkTotalHandValue(contestantsHand) {
    let total = contestantsHand.reduce(
      (total, card) => total + card.cardValue,
      0
    );

    return total;
  }

  let numberOfAces = findNumberOfAces(contestantsHand);

  let handTotal = checkTotalHandValue(contestantsHand);

  function adjustForAces(handTotal, numberOfAces, contestantsHand) {
    if (numberOfAces === 0 && handTotal < 21) {
      return handTotal;
    } else if (numberOfAces === 1 && handTotal <= 21) {
      return handTotal;
    } else if (numberOfAces === 1 && handTotal > 21) {
      return handTotal - 10;
    } else if (numberOfAces === 2 && handTotal <= 21) {
      return handTotal - 10;
    } else if (numberOfAces + contestantsHand.length === 5 && handTotal > 31) {
      return handTotal - 20;
    } else if (numberOfAces === 2 && handTotal > 21) {
      return handTotal - 10;
    } else if (numberOfAces + contestantsHand.length === 6 && handTotal < 32) {
      return handTotal - 10;
    } else if (numberOfAces === 2 && handTotal > 21) {
      return handTotal - 20;
    } else if (numberOfAces === 3 && handTotal > 10) {
      return handTotal - 30;
    } else return handTotal;
    // Try moving else if statement at line 189 down and the next else if statement up to fix logic bug.
  }
  let adjusted = adjustForAces(handTotal, numberOfAces, contestantsHand);

  return adjusted;
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
