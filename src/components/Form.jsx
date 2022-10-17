import React from "react";

const Form = ({
  inputs,
  setInputs,
  todos,
  setTodos,
  setStatus,
  filteredTodos
}) => {
  const plan = e => {
    setInputs(e.target.value);
    console.log(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { listplans: inputs, completed: false, id: Math.random() * 20 }
    ]);
    setInputs("");
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
      <form className="body" onSubmit={submit}>
          <input
            type="text"
            placeholder="input your plans"
            name="input"
            value={inputs}
            onChange={plan}
          />
          <button type="submit" className="add">
            Add
          </button>
        <select onChange={statusHandler} name="todos" id="">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
  );
};

export default Form;
