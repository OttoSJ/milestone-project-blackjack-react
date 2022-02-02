import React, { Component } from "react";
import Dealer from "./common/dealer";
import Cards from "./common/cards";
import BoardLayout from "./common/boardLayout";
import { createDeck } from "../fakebackend/fakecardsdatabase";
import { values } from "../fakebackend/fakecardsdatabase";
import { suits } from "../fakebackend/fakecardsdatabase";
import { shuffleCards } from "../fakebackend/fakecardsdatabase";
import Contestant from "./common/playerOne";

class Board extends Component {
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

  render() {
    return (
      <div className="board-layout-main-container">
        <div className="card-layout-container"></div>
        {/* <Cards /> */}
        <Dealer />
        <Contestant />
      </div>
    );
  }
}

export default Board;
