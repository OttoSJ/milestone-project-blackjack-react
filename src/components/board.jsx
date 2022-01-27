import React, { Component } from "react";
import Dealer from "./dealer";

class Board extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Dealer />
      </div>
    );
  }
}

export default Board;
