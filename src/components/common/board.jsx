import React, { Component } from "react";
import Dealer from "./dealer";
import PlayerOne from "./playerOne";
import Messeges from "./messeges";
import { cardDeck } from "../../fakebackend/cardsdatabase";
import {
  StyledCardContainer,
  StyledMsgContainer,
} from "../styles/styledcomponents";
import { getHandTotal, shuffleCards } from "../../utils/gameUtilityFunc";

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

    // if (deck.length < 4) {
    //   getNewDeck()
    // }

    this.setState({
      dealersHand: [firstDealerCard, secondDealerCard],
      playersHand: [thirdPlayerCard, fourthPlayerCard],
      playersHandTotal: playersHandTotal,
      dealersHandTotal: dealersHandTotal,
      numberOfGamesPlayed: oneGame,
      deck: revisedDeck,
    });
    console.log(dealersHandTotal);
    console.log(playersHandTotal);

    // displayScore()
  };

  handlePlayersNextCard = () => {
    const newDeck = [...this.state.deck];
    const nextPlayerCard = newDeck.shift();
    const playersHand = [...this.state.playersHand, nextPlayerCard];
    const playersHandTotal = getHandTotal(playersHand);

    const revisedDeck = [...newDeck];
    this.setState({
      playersHand: [...this.state.playersHand, nextPlayerCard],
      deck: revisedDeck,
      playersHandTotal: playersHandTotal,
    });
    console.log(playersHandTotal);
  };

  render() {
    console.log(this.state.numberOfGamesPlayed);
    const { dealersHand, playersHand } = this.state;
    const { dealersHandTotal, playersHandTotal } = this.state;
    return (
      <div className="board-layout-main-container">
        <StyledMsgContainer>
          <Messeges
            playersHandTotal={playersHandTotal}
            dealersHandTotal={dealersHandTotal}
          />
        </StyledMsgContainer>
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
              onPlayersCard={this.handlePlayersNextCard}
            />
          </div>
        </StyledCardContainer>
      </div>
    );
  }
}

export default Board;
