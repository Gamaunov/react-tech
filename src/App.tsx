import React from "react";
import "./App.css";
import Person, { Country } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Denis"
        email="denis@gmail.com"
        age={28}
        isMarried={false}
        friends={["Alex", "Maria"]}
        country={Country.Russia}
      />
    </div>
  );
}

export default App;
