import React, { Component } from "react";
import Dealer from "./dealer";
import { shuffleCards } from "../../fakebackend/cardsdatabase";
import PlayerOne from "./playerOne";
import { cardDeck } from "../../fakebackend/cardsdatabase";

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
    // console.log(this.state.deck);
    const { dealersHand, playersHand } = this.state;
    return (
      <div className="board-layout-main-container">
        <div className="dealers-card-container">
          <div className="cards">
            <Dealer
              dealersHand={dealersHand}
              onStartHand={this.handleStartHand}
            />
          </div>
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
