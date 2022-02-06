import React, { Component } from "react";
import Cards from "./cards";

class PlayerOne extends Component {
  state = {};

  render() {
    const { playersHand } = this.props;

    return (
      <React.Fragment>
        <Cards contestantsHand={playersHand} />

        <button
          className="hold-button
           cursor"
          onClick={null}
          disabled={this.props.playersHand.length === 0 ? true : false}
        >
          Hold
        </button>
        <button
          className="hit-me-button cursor"
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
// Keep in mind that the button can handle more then one function. Also I can probably use the state here to push data via props (function) back up to the board and mutate the state there from here.
