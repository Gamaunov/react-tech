import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const setZero = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={setZero}>set to zero</button>
      {count}
    </div>
  );
}

export default App;
