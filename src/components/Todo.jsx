// Todo.jsx
import React from 'react';

const Todo = ({ todo, onDelete, onEdit }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onEdit(todo)}>Edit</button>
    </div>
  );
};

export default Todo;
