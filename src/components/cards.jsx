import React, { Component } from "react";

class Cards extends Component {
  state = {
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    suits: ["Spades", "Diamonds", "Clubs", "Hearts"],
    deck: [],
  };
  render() {
    console.log(this.state.deck);
    return (
      <div>
        <button onClick={() => this.createDeck()} className="btn btn-primary">
          createDeck
        </button>
        <button onClick={() => this.shuffleDeck()} className="btn btn-primary">
          shuffledDeck
        </button>
      </div>
    );
  }

  createDeck = () => {
    const { values, suits } = this.state;
    const deck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
      }
    }
    this.setState({ deck: deck });
    console.log(this.state.deck);
  };

  shuffleDeck = () => {
    const deck = [...this.state.deck];
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];

      deck[location1] = deck[location2];

      deck[location2] = tmp;
    }
    this.setState({ deck: deck });
  };
}

export default Cards;
