import React, { Component } from "react";
import { createDeck } from "../fakebackend/fakecardsdatabase";
import Dealer from "./dealer";
import { values } from "../fakebackend/fakecardsdatabase";
import { suits } from "../fakebackend/fakecardsdatabase";
import { shuffleCards } from "../fakebackend/fakecardsdatabase";
import Contestant from "../components/contestant";

class Cards extends Component {
  state = {
    deck: [],
    shuffledDeck: [],

    // Move shuffledDeck to dealer component
    // Firgure out how to make card value, suit and image all one card object in this component
  };

  componentDidMount() {
    this.setState({
      deck: createDeck(values, suits),
      shuffledDeck: shuffleCards(createDeck(values, suits)),
    });
  }

  testing() {
    const shuffledDeck = [...this.state.shuffledDeck];
  }

  render() {
    // console.log(this.state.deck);
    // console.log(this.state.shuffledDeck);

    return (
      <div>
        <button onClick={() => this.props.onDealtCard(this.state.shuffledDeck)}>
          Deal
        </button>
      </div>
    );
  }
}

export default Cards;
