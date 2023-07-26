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
      <div children={<h2>Goodbye, moonman</h2>}/>
      <input id="FINE" type="text" value={name} onChange={handleNameChange} />
      <button id="thisButton" onClick={(e)=>{setCount(count+1)}}>Seent</button>

      <ToDos title={name}/>
    </div>
  );
}

function ToDos(props) {
  return <div><h3 style={{padding: 30, backgroundColor: 'pink'}}>{props.title}</h3></div>
}

export default App;
