import React, { useState } from 'react';

function FC() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add new todo
  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = { id: Date.now(), text };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Start editing a todo
  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  // Save the edited todo
  const handleSave = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditText('');
  };

  return (
    <div>
      <h3>Simple Todo List</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FC;