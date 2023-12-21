import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Disney from "./components/Disney";

class App extends Component {
  state = {
    isCounterVisible: true
  };
  render() {
    return (
      <div className="App">
        {this.state.isCounterVisible && <Counter />}
        <button onClick={() => this.setState({ isCounterVisible: !this.state.isCounterVisible })}>
          {this.state.isCounterVisible ? "Hide" : "Show"} Counter
        </button>

        <Disney />
      </div>
    );
  }
}

export default App;
