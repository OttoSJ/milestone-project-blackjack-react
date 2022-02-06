import React, { Component } from "react";

class Messeges extends Component {
  state = {};
  render() {
    const { playersHandTotal, dealersHandTotal } = this.props;
    const messeges = [
      `Dealers's Score ${dealersHandTotal}`,
      `Player's Score ${playersHandTotal}`,
    ];

    return (
      <div>
        {messeges.map((messege) => (
          <span key={messege}>
            <p>{messege}</p>
          </span>
        ))}
      </div>
    );
  }
}
// Place the totals into an array and use the map method to render the results
export default Messeges;
