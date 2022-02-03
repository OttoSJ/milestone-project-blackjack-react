import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="container d-flex flex-row">
        {props.contestantsHand.map((card) => (
          <img
            key={card.cardImage}
            src={card.cardImage}
            className="logo"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
