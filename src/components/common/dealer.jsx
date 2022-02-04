import React, { Component } from "react";
import Cards from "./cards";

class Dealer extends Component {
  state = {};

  render() {
    const { dealersHand } = this.props;
    return (
      <React.Fragment>
        <Cards contestantsHand={dealersHand} />
        <button
          className="dealer-button cursor"
          onClick={() => this.props.onStartHand()}
          disabled={this.props.dealersHand.length === 0 ? false : true}
        >
          Start
        </button>
      </React.Fragment>
    );
  }
}
export default Dealer;
