import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "Mary";
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>THIS IS ACTUALLY {count} MAGIC</h1>
      <button id="thisButton" onClick={(e)=>{setCount(count+1)}}>Seent</button>
    </div>
  );
}

export default App;
