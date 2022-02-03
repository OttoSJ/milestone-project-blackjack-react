import "./App.css";
import Board from "./components/common/board";
import Cards from "./components/common/cards";
import Contestant from "./components/common/playerOne";
import Dealer from "./components/common/dealer";

function App() {
  return (
    <div className="container">
      <Board />
    </div>
  );
}

export default App;
