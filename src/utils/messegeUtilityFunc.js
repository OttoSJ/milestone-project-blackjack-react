// import React, { Component } from "react";
import { handleDealersNextCard } from "../components/common/board";

export function checkForWinnerMessege(dealersHandTotal, playersHandTotal) {
  if (dealersHandTotal > 21) {
    return console.log("Player Wins!!");
  } else if (dealersHandTotal === playersHandTotal) {
    return console.log("Draw");
  } else if (dealersHandTotal > playersHandTotal);
  return console.log("Dealer Wins!");
}

// export function handleDealersPlay(dealersHandTotal, playersHandTotal) {
//   if (dealersHandTotal < playersHandTotal) {
//     return handleDealersNextCard();
//   } else return checkForWinnerMessege();
// }

export function handleDealersPlay(
  handleDealersNextCard,
  dealersHandTotal,
  playersHandTotal
) {
  //   const { dealersHandTotal, playersHandTotal } = this.state;

  if (dealersHandTotal < playersHandTotal) {
    return handleDealersNextCard();
  } else return checkForWinnerMessege();
}
