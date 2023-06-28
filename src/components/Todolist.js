import React from 'react'

const Todolist = (props) => {
  return (
    <ul className="Alltodos">
    {props.todos.map((t) => (
      <li className="singleTodo">
        <span className="activity" key={t.id}>
          {t.todo}
        </span>
        <button onClick={() => props.handleEdit(t.id)}>Edit</button>
        <button onClick={() => props.handleDelete(t.id)}>Delete</button>
      </li>
    ))}
  </ul>
  )
}

export default Todolist
