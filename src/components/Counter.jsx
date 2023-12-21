import { Component } from "react";

// const newCounter = {
//     render: function (){}
// }

class Counter extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    console.log("COMPONENT DID MOUNT AVVENUTO");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  componentDidUpdate() {
    console.log("COMPONENT DID UPDATE AVVENUTO");
  }

  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT AVVENUTO");
  }

  // render è un metodo del ciclo di vita del componente ed è il secondo a partire dopo un eventuale constructor()
  render() {
    console.log("RENDER AVVENUTO");
    return (
      <div>
        <h3>Sono Counter</h3>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

export default Counter;
