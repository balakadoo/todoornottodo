import { useState } from 'react';
import React from 'react';

// Main Todo component
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, done: false }]);
    setInput('');
  };

  // Toggle done state
  const toggleTodo = idx => {
    setTodos(todos =>
      todos.map((todo, i) =>
        i === idx ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = idx => {
    setTodos(todos => todos.filter((_, i) => i !== idx));
  };

  // Count completed tasks
  const completedCount = todos.filter(todo => todo.done).length;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#4B352A' // ambiance background
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #CA7842',
        padding: '2rem',
        borderRadius: '12px',
        background: '#F0F2BD',
        boxShadow: '0 4px 24px rgba(75,53,42,0.12)',
        fontFamily: "'Baloo 2', 'Comic Sans MS', 'Quicksand', 'Arial Rounded MT Bold', Arial, sans-serif"
      }}>
        <h1 style={{
          color: '#4B352A',
          marginBottom: '0.5rem',
          fontFamily: "'Baloo 2', 'Comic Sans MS', 'Quicksand', 'Arial Rounded MT Bold', Arial, sans-serif",
          fontWeight: 800,
          letterSpacing: '1px',
          fontSize: '2.2rem'
        }}>Todo List</h1>
        <div style={{
          marginBottom: '1rem',
          color: '#CA7842',
          fontWeight: 'bold',
          fontFamily: "'Baloo 2', 'Comic Sans MS', 'Quicksand', 'Arial Rounded MT Bold', Arial, sans-serif"
        }}>
          Completed: {completedCount} / {todos.length}
        </div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a todo"
          style={{
            padding: '0.5rem 1rem',
            border: '2px solid #B2CD9C',
            borderRadius: '6px',
            outline: 'none',
            marginBottom: '0.5rem',
            background: '#fffbe6',
            color: '#4B352A',
            fontSize: '1rem',
            fontFamily: "'Baloo 2', 'Comic Sans MS', 'Quicksand', 'Arial Rounded MT Bold', Arial, sans-serif"
          }}
        />
        <button
          onClick={addTodo}
          style={{
            marginTop: '0.5rem',
            border: '2px solid #CA7842',
            background: '#CA7842',
            color: '#fff',
            borderRadius: '6px',
            cursor: 'pointer',
            padding: '0.4rem 1.2rem',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'background 0.2s, transform 0.1s, box-shadow 0.1s',
            boxShadow: '0 2px 8px rgba(75,53,42,0.08)'
          }}
          onMouseOver={e => {
            e.target.style.background = '#B2CD9C';
            e.target.style.color = '#4B352A';
          }}
          onMouseOut={e => {
            e.target.style.background = '#CA7842';
            e.target.style.color = '#fff';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(75,53,42,0.08)';
          }}
          onMouseDown={e => {
            e.target.style.transform = 'scale(0.96)';
            e.target.style.boxShadow = '0 1px 2px rgba(75,53,42,0.12)';
          }}
          onMouseUp={e => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(75,53,42,0.08)';
          }}
        >
          Add
        </button>
        <ul style={{ padding: 0, listStyle: 'none', width: '100%', marginTop: '1rem' }}>
          {todos.map((todo, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '0.5rem 0',
                width: '100%',
                background: todo.done ? '#B2CD9C' : '#fffbe6',
                borderRadius: '6px',
                padding: '0.4rem 0.7rem',
                border: `1.5px solid ${todo.done ? '#B2CD9C' : '#CA7842'}`
              }}
            >
              <span
                onClick={() => toggleTodo(idx)}
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                  color: todo.done ? '#4B352A' : '#CA7842',
                  cursor: 'pointer',
                  flex: 1,
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  transition: 'color 0.2s',
                  fontFamily: "'Baloo 2', 'Comic Sans MS', 'Quicksand', 'Arial Rounded MT Bold', Arial, sans-serif"
                }}
                title="Click to mark as done/undone"
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(idx)}
                style={{
                  marginLeft: '1rem',
                  background: '#ff4d4f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  padding: '0.25rem 0.7rem',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  transition: 'background 0.2s, transform 0.1s'
                }}
                onMouseOver={e => {
                  e.target.style.background = '#CA7842';
                }}
                onMouseOut={e => {
                  e.target.style.background = '#ff4d4f';
                  e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={e => {
                  e.target.style.transform = 'scale(0.95)';
                }}
                onMouseUp={e => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
