import React, { Component } from "react";
import Cards from "../components/cards";

class Dealer extends Component {
  state = {
    shuffleDeck: [],
    dealCards: [],
  };

  handleDealtCard(deck) {
    // const shuffleDeck = [...deck];
    console.log(deck);
    // this.setState({ dealCards: shuffleDeck });
  }
  render() {
    // console.log(this.state.dealCards);
    return (
      <div>
        <Cards onDealtCard={this.handleDealtCard} />
      </div>
    );
  }
}

export default Dealer;
