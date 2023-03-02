import { useState } from "react";
import "./App.css";

function App() {
  const [showText, setShowText] = useState('teal');

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(showText === 'teal' ? 'red' :  'teal')
        }}
      >
        show/hide
      </button>
       <h1 style={{color: showText}}>Hi my ame id</h1>
    </div>
  );
}

export default App;
