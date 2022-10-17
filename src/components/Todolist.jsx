import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todolist">
      <h1>Todos</h1>
      <div className="ul">
        {filteredTodos.map(todo =>
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
            listplans={todo.listplans}
          />
        )}
      </div>
    </div>
  );
};

export default Todolist;
