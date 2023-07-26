import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function handleNameChange (e) {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>THIS IS ACTUALLY {count} MAGIC</h1>
      <div>They call me {name}</div>
      <input type="text" value={name} onChange={handleNameChange}></input>
      <button id="thisButton" onClick={(e)=>{setCount(count+1)}}>Seent</button>
    </div>
  );
}

export default App;
