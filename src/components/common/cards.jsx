import React, { Component } from "react";
import { CardTheme } from "../styles/card.styled";
import fakecardsdatabase, {
  cardDeck,
  cardImage,
} from "../../fakebackend/fakecardsdatabase";
import Contestant from "./contestant";

const Cards = (props) => {
  const { onDealtCard } = props;

  return (
    <div>
      <div className="container d-flex flex-row">
        {props.onDealersCard.map((card) => (
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
        onClick={() => onDealtCard()}
        disabled={props.onDealersCard.length === 0 ? false : true}
      >
        Deal
      </button>

      <Contestant />
    </div>
  );
};

//

// export default Cards;
// const Cards = (props) => {
//   const { onDealtCard } = props;

//   return (
//     <div>
//       <div className="container d-flex flex-row">
//         {props.onDealersCard.map((card) => (
//           <img
//             key={card.cardImage}
//             src={card.cardImage}
//             className="logo"
//             alt=""
//           />
//         ))}
//       </div>
//       <button
//         className="dealer-button"
//         onClick={() => onDealtCard()}
//         disabled={props.onDealersCard.length === 0 ? false : true}
//       >
//         Deal
//       </button>
//       <Contestant />
//     </div>
//   );
// };

export default Cards;
