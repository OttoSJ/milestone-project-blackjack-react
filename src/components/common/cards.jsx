import React, { Component } from "react";
import { CardTheme } from "../styles/card.styled";
import fakecardsdatabase, {
  cardDeck,
  cardImage,
} from "../../fakebackend/fakecardsdatabase";
import Contestant from "./playerOne";
// import Dealer from "./dealer";

const Cards = (props) => {
  const { onFirstHand, onPlayersCard } = props;

  return (
    <div>
      <div className="container d-flex flex-row dealer">
        {props.dealersCard.map((card) => (
          <img
            key={card.cardImage}
            src={card.cardImage}
            className="logo"
            alt=""
          />
        ))}
      </div>
      <button
        className="dealer-button"
        onClick={() => onFirstHand()}
        disabled={props.dealersCard.length === 0 ? false : true}
      >
        Deal
      </button>
      <div className="container d-flex flex-row player">
        {props.playersCard.map((card) => (
          <img
            key={card.cardImage}
            src={card.cardImage}
            className="logo"
            alt=""
          />
        ))}
      </div>
      <button
        className="player-button"
        onClick={() => onPlayersCard()}
        disabled={props.playersCard.length === 0 ? true : false}
      >
        Hit Me
      </button>
    </div>
  );
};

export default Cards;

// // class Cards extends Component {
//   state = {
//     deck: [],
//     dealersHand: [],
//     playersHand: [],
//   };

//   componentDidMount() {
//     this.setState({ deck: cardDeck });
//   }

//   handleStartHand = () => {
//     // const newDeck = [...this.state.deck];

//     // const firstCard = newDeck.shift();
//     // const secondCard = newDeck.shift();

//     // const revisedDeck = [...newDeck];

//     // this.setState({
//     //   dealersHand: [firstCard, secondCard],
//     //   deck: revisedDeck,
//     // });
//     console.log("clicked");
//   };
//   render() {
//     return (
//       <div>
//         <div className="dealers-card-container">
//           <div className="cards">
//             {this.state.dealersHand.map((card) => (
//               <img
//                 key={card.cardImage}
//                 src={card.cardImage}
//                 className="logo"
//                 alt=""
//               />
//             ))}
//           </div>
//         </div>
//         <Dealer onDealtCard={this.handleStartHand} />
//         <Contestant />
//         {/* <button onClick={this.handleStartHand}>click me</button> */}
//       </div>
//     );
//   }
// }

// export default Cards;

//
