import "./App.css";
import Board from "./components/board";
import Cards from "./components/cards";
import Contestant from "./components/contestant";
import DealerFunctios from "./components/dealerFunctions";

function App() {
  return (
    <div className="container">
      <Cards />
      <Contestant />
      <DealerFunctios />
      <Board />
    </div>
  );
}

export default App;
