import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>ToDo List</h1>

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

  const inputRef = useRef(null);
  useEffect(function setFocusOnInput() {
    inputRef.current.focus();
  }, []);

  function appendToDos(e) {
    e.preventDefault();
    const newToDoId = lastToDoId + 1;
    let updatedArray = [...todos, { name: newToDo, id: newToDoId }];
    setLastToDoId(newToDoId);
    setTodos(updatedArray);
    setNewToDo("");
  }
  function deleteToDo(toDoId) {
    const updatedToDos = todos.filter((todo) => todo.id !== toDoId);
    setTodos(updatedToDos);
  }
  return (
    <div>
      <form id="input-container" onSubmit={appendToDos}>
        <label htmlFor="newToDoInput">What are you doin' today?</label>
        <br />
        <input
          id="newToDoInput"
          ref={inputRef}
          type="text"
          value={newToDo}
          onChange={(e) => {
            setNewToDo(e.target.value);
          }}
        ></input>
        <div id="displayNewTodoInput">{newToDo}</div>
        <button id="sureAboutToDoButton" disabled={newToDo.length === 0}>
          Hit it!
        </button>
      </form>
      <div id="list-container">
        {todos.length > 0 ? (
          <ToDoList>
              {todos.map((todo) => (
                <ToDoListItem todo={todo} key={todo.id} onDelete={() => deleteToDo(todo.id)}/>
              ))}
          </ToDoList>
        ) : null}
      </div>
    </div>
  );
}; 

function ToDoList({children}) {
  return (
    <ul style={{border:"1px solid black", backgroundColor:"black", color:"lightgreen", fontFamily:"monospace", listStyleType:"none"}}>
      {children}
    </ul>
  )
}

function ToDoListItem({todo, onDelete}){
  return (
    <li style={{padding:"30"}} id={`todo-${todo.id}`}>
      <div>
        {todo.name}
        <button
          id={`deleteToDoIcon-${todo.id}`}
          onClick={onDelete}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default App;
