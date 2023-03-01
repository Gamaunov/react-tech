import "./App.css";
import User from "./components/user/User";

function App() {
  const users = [
    { name: "pedro", age: 21 },
    { name: "ja", age: 22 },
    { name: "rwfr", age: 231 },
  ];
  return (
    <div className="App">
      {users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age} />;
      })}
    </div>
  );
}



export default App;
