import React, { Component } from "react";
// import Board from "./board";

class Messeges extends Component {
  state = {};
  render() {
    const { playersHandTotal, dealersHandTotal } = this.props;
    console.log(dealersHandTotal);
    console.log(playersHandTotal);
    return (
      <div>
        <span>
          <p>Dealer's Score {dealersHandTotal}</p>
        </span>
        <span>
          <p>Wins!</p>
        </span>
        <span>
          <p>Player's Score {playersHandTotal} </p>
        </span>
      </div>
    );
  }
}

export default Messeges;
