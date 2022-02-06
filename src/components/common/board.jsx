import React, { Component } from "react";
import Dealer from "./dealer";
import PlayerOne from "./playerOne";
import Messeges from "./messeges";
import { cardDeck } from "../../fakebackend/cardsdatabase";
import {
  StyledCardContainer,
  StyledMsgContainer,
} from "../styles/styledcomponents";
import { getHandTotal, shuffleCards } from "../../utils/cardUtilityFunc";
import {
  checkForWinnerMessege,
  handleDealersPlay,
} from "../../utils/messegeUtilityFunc";

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

  handleDealersNextCard = () => {
    const newDeck = [...this.state.deck];
    const nextDealerCard = newDeck.shift();
    const dealersHand = [...this.state.dealersHand, nextDealerCard];
    const dealersHandTotal = getHandTotal(dealersHand);

    const revisedDeck = [...newDeck];
    this.setState({
      dealersHand: [...this.state.dealersHand, nextDealerCard],
      deck: revisedDeck,
      dealersHandTotal: dealersHandTotal,
    });
    // I need to invoke the handleHold() here
    console.log(dealersHandTotal);
  };

  handleHold = (handleDealersNextCard) => {
    const { dealersHandTotal, playersHandTotal } = this.state;
    handleDealersPlay(
      handleDealersNextCard,
      dealersHandTotal,
      playersHandTotal
    );
    if (dealersHandTotal < playersHandTotal) {
      return console.log("hold clicked");
    }
  };

  // handleDealersPlay = (handleDealersNextCard) => {
  //   const { dealersHandTotal, playersHandTotal } = this.state;

  //   if (dealersHandTotal < playersHandTotal) {
  //     return handleDealersNextCard();
  //   } else return checkForWinnerMessege();
  // };

  render() {
    console.log(this.state.numberOfGamesPlayed);
    const { dealersHand, playersHand, dealersHandTotal, playersHandTotal } =
      this.state;

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
              onHold={this.handleHold}
            />
          </div>
        </StyledCardContainer>
      </div>
    );
  }
}

export default Board;
