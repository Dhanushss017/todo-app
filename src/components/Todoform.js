import React from "react";

const Todoform = (props) => {
  return (
    <form className="TodoForm" onSubmit={props.handleSubmit}>
      <input
        placeholder="Add Todo"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
        type="text"
      />
      <button type="submit">{props.editId ? "Edit" : "Submit"}</button>
    </form>
  );
};

export default Todoform;
