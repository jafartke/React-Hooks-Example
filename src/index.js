import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  //let count = 1
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
