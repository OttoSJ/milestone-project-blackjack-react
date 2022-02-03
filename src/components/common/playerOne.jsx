import React, { Component } from "react";
import Cards from "./cards";

class PlayerOne extends Component {
  render() {
    const { playersHand } = this.props;

    return (
      <React.Fragment>
        <Cards contestantsHand={playersHand} />
        <button
          className="player-button"
          onClick={() => this.props.onPlayersCard()}
          disabled={this.props.playersHand.length === 0 ? true : false}
        >
          Hit Me
        </button>
      </React.Fragment>
    );
  }
}

export default PlayerOne;
