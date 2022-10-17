import React from 'react'

const Todo = ({listplans, todo, todos, setTodos}) => {

  const deletetodos = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
    console.log(todo)
  };

  const completetodos = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  };

  return (
    <div className="todo">
      <div className="plans-btns">
        <p className={`planlist ${todo.completed ? "completedplan" : ""}`}>{listplans}</p>
        <button onClick={completetodos} className={`edit ${todo.completed ? "completed" : ""}`}>Done</button>
        <button onClick={deletetodos} className="delete">Delete</button>
      </div>
    </div>
  )
}

export default Todo
