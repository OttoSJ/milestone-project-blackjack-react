import React, { Component } from "react";
import Cards from "./cards";

class Dealer extends Component {
  render() {
    const { dealersHand } = this.props;
    return (
      <React.Fragment>
        <Cards contestantsHand={dealersHand} />
      </React.Fragment>
    );
  }
}
export default Dealer;
