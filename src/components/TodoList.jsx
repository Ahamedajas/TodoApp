// TodoList.jsx
import React, { useState } from 'react';

function TodoList({ todos, onDelete, onComplete, onEdit }) {
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (id) => {
    onEdit(id, editText);
    setEditingId(null);
  };

  const handleEditCancel = () => {
    setEditText('');
    setEditingId(null);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input type="text" value={editText} onChange={handleEditChange} />
              <button onClick={() => handleEditSubmit(todo.id)}>Save</button>
              <button onClick={handleEditCancel}>Cancel</button>
            </>
          ) : (
            <>
              <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo.id)} />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
              <button onClick={() => setEditingId(todo.id)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
