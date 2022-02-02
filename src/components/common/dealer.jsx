import React, { Component } from "react";
import Cards from "./cards";
import fakecardsdatabase, {
  cardDeck,
  cardImage,
} from "../../fakebackend/fakecardsdatabase";
import Contestant from "./playerOne";

class Dealer extends Component {
  state = {
    deck: [],
    dealersHand: [],
    playersHand: [],
  };
  componentDidMount() {
    this.setState({ deck: cardDeck });
  }

  handleStartHand = () => {
    const newDeck = [...this.state.deck];
    // Watch react props video first *******************
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

  handleNextPlayersCard = () => {
    const newDeck = [...this.state.deck];
    const nextPlayerCard = newDeck.shift();

    const revisedDeck = [...newDeck];
    this.setState({
      playersHand: [...this.state.playersHand, nextPlayerCard],
      deck: revisedDeck,
    });
    console.log(this.state.playersHand);
  };

  render() {
    // console.log(this.state.deck);
    // console.log(this.state.playersHand);

    const { dealersHand, playersHand } = this.state;
    return (
      <React.Fragment>
        <div className="dealers-card-container">
          <div className="cards">
            <Cards
              onFirstHand={this.handleStartHand}
              onPlayersCard={this.handleNextPlayersCard}
              dealersCard={dealersHand}
              playersCard={playersHand}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Dealer;

// // class Dealer extends Component {
//   render() {
//     // console.log(this.state.deck);
//     // console.log(this.state.dealersHand);

//     const { onDealtCard } = this.props;

//     return (
//       <React.Fragment>
//         <div>
//           <button
//             className="dealer-button"
//             onClick={() => onDealtCard}
//             // disabled={props.onDealersCard.length === 0 ? false : true}
//           >
//             Deal
//           </button>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default Dealer;

//
