import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <Main />;
}

function Main() {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoInput />
    </div>
  );
}

function ToDoInput() {
  const [newToDo, setNewToDo] = useState("");
  const inputIsEmpty = newToDo.length === 0;
  const [toDoList, setToDoList] = useState([]);
  const [nextToDoId, setNexttToDoId] = useState(1);

  const inputElement = useRef();

  useEffect(function focusInput() {
    inputElement.current.focus();
  }, []);

  function deleteToDoItem(e, id) {}

  return (
    <div>
      <form
        onSubmit={function addNewToDo(e) {
          e.preventDefault();
          setToDoList([
            ...toDoList,
            {
              name: newToDo,
              id: nextToDoId,
            },
          ]);
          setNexttToDoId(nextToDoId + 1);
          setNewToDo("");
          console.log({ toDoList });
        }}
      >
        <label htmlFor="newToDoInput">Enter a Task:&nbsp;&nbsp;</label>
        <input
          value={newToDo}
          type="text"
          ref={inputElement}
          id="newToDoInput"
          onChange={function updateNewToDo(e) {
            setNewToDo(e.target.value);
          }}
        ></input>
        <br />
        <button id="submitToDoInput" disabled={inputIsEmpty}>
          {inputIsEmpty ? "New ToDo" : `Add '${newToDo}' to Todos`}
        </button>
      </form>
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

function ToDoList(props) {
  return (
    <div>
      {props.toDoList.map(function returnToDo(toDo, i) {
        return <ToDo key={toDo.id} toDo={toDo} />;
      })}
    </div>
  );
}

function ToDo(props) {
  return (
    <li id={`todo-${props.toDo.id}`}>
      {props.toDo.name}
      <button onClick={() => props.deleteToDoItem(props.todo.id)}>X</button>
    </li>
  );
}

export default App;
