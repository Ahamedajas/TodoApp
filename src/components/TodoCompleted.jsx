// TodoCompleted.jsx
import React from 'react';

function TodoCompleted({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoCompleted;
