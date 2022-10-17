import logo from "./images/coffee1.jpg";
import "./App.scss";
import { useEffect, useState } from "react";
import Todolist from "./components/Todolist";
import Form from "./components/Form";

function App() {
  const [inputs, setInputs] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

useEffect(() => {
  getLocalTodos();
}, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    //function runs everytime we add a new todo
    // this array can take in multiple triggers
    // the function runs everytime the trigger changes 
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break; 
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <div className="list">List</div>
      </header>
      <Form
        inputs={inputs}
        todos={todos}
        setTodos={setTodos}
        setInputs={setInputs}
        setStatus={setStatus}
      />
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
