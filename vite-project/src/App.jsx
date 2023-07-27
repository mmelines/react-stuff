import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>ToDo List</h1>
      {/* <div>They call me {name}</div>
      <div children={<h2>Goodbye, moonman</h2>}/>
      <input id="FINE" type="text" value={name} onChange={handleNameChange} />
      <button id="thisButton" onClick={(e)=>{setCount(count+1)}}>Seent</button> */}

      <ToDos title="To Do List:" />
    </div>
  );
}

function ToDos(props) {
  const [todos, setTodos] = useState([
    { name: "take out the garbage", id: 1 },
    { name: "build a tree", id: 2 },
    { name: "plant a house", id: 3 },
    { name: "research recipes", id: 4 },
  ]);
  const [newToDo, setNewToDo] = useState("");
  const [lastToDoId, setLastToDoId] = useState(todos.length);
  const appendToDos = function (e) {
    const newToDoId = lastToDoId+1
    let updatedArray = [...todos,{name:newToDo, id:newToDoId}];
    setLastToDoId(newToDoId);
    setTodos(updatedArray);
    setNewToDo("");
  };
  return (
    <div>
      <div id="input-container">
        <label htmlFor="newToDoInput">What are you doin' today?</label>
        <input id="newToDoInput" type="text" value={newToDo} onChange={(e)=>{setNewToDo(e.target.value)}}></input>
        <div id="displayNewTodoInput">{newToDo}</div>
        <button id="sureAboutToDoButton" onClick={appendToDos}>Hit it!</button>
      </div>
      <div id="list-container">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} id={`todo-${todo.id}`}>
              {todo.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
