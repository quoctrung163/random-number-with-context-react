import React from "react";
import "./styles.css";
import Counter from "./components/Counter";
import NumberProvider from "./components/NumberProvider";
import NumberContext from "./contexts/NumberContexts";

export default function App() {
  // Provider Consumer
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>updateNumber</button>
            </div>
          )}
        </NumberContext.Consumer>
        <Counter>{({ count }) => <h1>{count}</h1>}</Counter>
      </div>
    </NumberProvider>
  );
}
