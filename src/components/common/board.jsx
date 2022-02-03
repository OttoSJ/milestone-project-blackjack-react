import React, { Component } from "react";
import Dealer from "./dealer";
import Cards from "./cards";

import { createDeck } from "../../fakebackend/fakecardsdatabase";
import { values } from "../../fakebackend/fakecardsdatabase";
import { suits } from "../../fakebackend/fakecardsdatabase";
import { shuffleCards } from "../../fakebackend/fakecardsdatabase";
import PlayerOne from "./playerOne";
import fakecardsdatabase, {
  cardDeck,
  cardImage,
} from "../../fakebackend/fakecardsdatabase";

class Board extends Component {
  state = {
    deck: [],
    dealersHand: [],
    playersHand: [],
  };

  componentDidMount() {
    this.setState({
      deck: shuffleCards(cardDeck),
    });
  }

  handleStartHand = () => {
    const newDeck = [...this.state.deck];

    const firstDealerCard = newDeck.shift();
    const secondDealerCard = newDeck.shift();
    const thirdPlayerCard = newDeck.shift();
    const fourthPlayerCard = newDeck.shift();

    const revisedDeck = [...newDeck];

    this.setState({
      dealersHand: [firstDealerCard, secondDealerCard],
      playersHand: [thirdPlayerCard, fourthPlayerCard],
      deck: revisedDeck,
    });
  };

  handlePlayersCard = () => {
    const newDeck = [...this.state.deck];
    const nextPlayerCard = newDeck.shift();

    const revisedDeck = [...newDeck];
    this.setState({
      playersHand: [...this.state.playersHand, nextPlayerCard],
      deck: revisedDeck,
    });
  };

  render() {
    console.log(this.state.deck);
    const { dealersHand, playersHand } = this.state;
    return (
      <div className="board-layout-main-container">
        <div className="dealers-card-container">
          <div className="cards">
            <Dealer dealersHand={dealersHand} />
          </div>
          <button
            className="dealer-button"
            onClick={() => this.handleStartHand()}
            disabled={this.state.dealersHand.length === 0 ? false : true}
          >
            Start
          </button>
        </div>
        <div className="players-card-container">
          <div className="cards">
            <PlayerOne
              playersHand={playersHand}
              onPlayersCard={this.handlePlayersCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
