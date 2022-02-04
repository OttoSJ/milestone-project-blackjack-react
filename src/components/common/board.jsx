import React, { Component } from "react";
import Dealer from "./dealer";
import PlayerOne from "./playerOne";
import { cardDeck } from "../../fakebackend/cardsdatabase";
import { StyledCardContainer } from "../styles/cardcontainer.style";
import {
  gamePlayed,
  getHandTotal,
  shuffleCards,
} from "../../utils/gameUtilityFunc";

class Board extends Component {
  state = {
    deck: [],
    dealersHand: [],
    dealersHandTotal: 0,
    playersHand: [],
    playersHandTotal: 0,
    numberOfGamesPlayed: 0,
  };

  componentDidMount() {
    this.setState({
      deck: shuffleCards(cardDeck),
    });
  }

  handleStartHand = () => {
    const newDeck = [...this.state.deck];
    let numberOfGamesPlayed = [this.state.numberOfGamesPlayed];

    const firstDealerCard = newDeck.shift();
    const secondDealerCard = newDeck.shift();
    const dealersHand = [firstDealerCard, secondDealerCard];
    const dealersHandTotal = getHandTotal(dealersHand);

    const thirdPlayerCard = newDeck.shift();
    const fourthPlayerCard = newDeck.shift();
    const playersHand = [thirdPlayerCard, fourthPlayerCard];
    const playersHandTotal = getHandTotal(playersHand);

    numberOfGamesPlayed++;
    let oneGame = numberOfGamesPlayed;

    const revisedDeck = [...newDeck];

    this.setState({
      dealersHand: [firstDealerCard, secondDealerCard],
      playersHand: [thirdPlayerCard, fourthPlayerCard],
      playerHandTotal: playersHandTotal,
      dealersHandTotal: dealersHandTotal,
      numberOfGamesPlayed: oneGame,
      deck: revisedDeck,
    });
    console.log(dealersHandTotal);
    console.log(playersHandTotal);
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
    console.log(this.state.numberOfGamesPlayed);
    const { dealersHand, playersHand } = this.state;
    return (
      <div className="board-layout-main-container">
        <StyledCardContainer>
          <div className="cards">
            <Dealer
              dealersHand={dealersHand}
              onStartHand={this.handleStartHand}
            />
          </div>
        </StyledCardContainer>
        <StyledCardContainer>
          <div className="cards">
            <PlayerOne
              playersHand={playersHand}
              onPlayersCard={this.handlePlayersCard}
            />
          </div>
        </StyledCardContainer>
      </div>
    );
  }
}

export default Board;
