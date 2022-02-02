import React, { Component } from "react";
import Cards from "./cards";
import fakecardsdatabase, {
  cardDeck,
  cardImage,
} from "../../fakebackend/fakecardsdatabase";

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
    const firstCard = newDeck.shift();
    const secondCard = newDeck.shift();
    const thirdCard = newDeck.shift();
    const fourthCard = newDeck.shift();

    const revisedDeck = [...newDeck];

    this.setState({
      dealersHand: [firstCard, secondCard],
      playersHand: [thirdCard, fourthCard],
      deck: revisedDeck,
    });
  };

  render() {
    // console.log(this.state.deck);
    // console.log(this.state.dealersHand);

    const { dealersHand, playersHand } = this.state;
    return (
      <React.Fragment>
        <div className="dealers-card-container">
          <div className="cards">
            <Cards
              onDealtCard={this.handleStartHand}
              onDealersCard={dealersHand}
              // onPlayersCard={playersHand}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Dealer;

//

// class Dealer extends Component {
//   state = {
//     deck: [],
//     dealersHand: [],
//     playersHand: [],
//   };
//   componentDidMount() {
//     this.setState({ deck: cardDeck });
//   }

//   handleStartHand = () => {
//     const newDeck = [...this.state.deck];
//     // Watch react props video first *******************
//     const firstCard = newDeck.shift();
//     const secondCard = newDeck.shift();
//     const thirdCard = newDeck.shift();
//     const fourthCard = newDeck.shift();

//     const revisedDeck = [...newDeck];

//     this.setState({
//       dealersHand: [firstCard, secondCard],
//       playersHand: [thirdCard, fourthCard],
//       deck: revisedDeck,
//     });
//   };

//   render() {
//     // console.log(this.state.deck);
//     // console.log(this.state.dealersHand);

//     const { dealersHand, playersHand } = this.state;
//     return (
//       <React.Fragment>
//         <div className="dealers-card-container">
//           <div className="cards">
//             <Cards
//               onDealtCard={this.handleStartHand}
//               onDealersCard={dealersHand}
//               // onPlayersCard={playersHand}
//             />
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default Dealer;
