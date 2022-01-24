/* eslint-disable no-dupe-class-members */
import React, { Component } from "react";
import Cards from "./cards";

class Contestant extends Component {
  state = {
    playersHand: [11, 11, 11, 10],
    playersHandTotal: [],
    numberOfAces: [],
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.findNumberOfAces(this.state.playersHand)}
          className="btn btn-secondary"
        >
          findNumberOfAces
        </button>
        <button
          onClick={() => this.checkTotalHandValue(this.state.playersHand)}
          className="btn btn-secondary"
        >
          checkTotalHandValue
        </button>
        <button
          onClick={() => this.addAces(this.state.numberOfAces)}
          className="btn btn-secondary"
        >
          addAces
        </button>
        <h1>{this.state.playersHandTotal}</h1>
      </div>
    );
  }
  checkTotalHandValue = (playersHand) => {
    const total = playersHand.reduce((total, element) => total + element);
    this.setState({ playersHandTotal: total });
    console.log(total);
  };

  findNumberOfAces = () => {
    let aces = this.state.playersHand.filter((number) => number === 11);
    this.setState({ numberOfAces: aces });
    console.log(aces);
  };

  // Need to add one more if statment to length of to that -10 of less than 17 before the other two
  addAces = () => {
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
  };
}

export default Contestant;
