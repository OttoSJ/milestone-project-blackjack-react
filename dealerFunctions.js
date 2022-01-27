/* eslint-disable no-unused-vars */
function checkTotalHandValue(playersHand) {
  const total = playersHand.reduce((total, element) => total + element);
  this.setState({ playersHandTotal: total });
  console.log(total);
}

function findNumberOfAces() {
  let aces = this.state.playersHand.filter((number) => number === 11);
  this.setState({ numberOfAces: aces });
  console.log(aces);
}

// Need to add one more if statment to length of to that -10 of less than 17 before the other two
function addAces() {
  const { numberOfAces, playersHandTotal, playersHand } = this.state;
  if (numberOfAces.length === 0) {
    return console.log(playersHandTotal);
  } else if (numberOfAces.length === 1 && playersHandTotal <= 21) {
    return console.log(playersHandTotal);
  } else if (numberOfAces.length === 1 && playersHandTotal > 21) {
    return console.log(playersHandTotal - 10);
  } else if (numberOfAces.length === 2 && playersHandTotal <= 21) {
    return console.log(playersHandTotal - 10);
  } else if (
    numberOfAces.length + playersHand.length === 5 &&
    playersHandTotal > 31
  ) {
    return console.log(playersHandTotal - 20);
  } else if (
    numberOfAces.length + playersHand.length === 5 &&
    playersHandTotal > 21
  ) {
    return console.log(playersHandTotal - 10);
  } else if (
    numberOfAces.length + playersHand.length === 6 &&
    playersHandTotal < 32
  ) {
    return console.log(playersHandTotal - 10);
  } else if (numberOfAces.length === 2 && playersHandTotal > 21) {
    return console.log(playersHandTotal - 20);
  } else if (numberOfAces.length === 3 && playersHandTotal > 10) {
    return console.log(playersHandTotal - 30);
  } else return console.log(playersHandTotal - 40);
}
