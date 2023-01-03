import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
export default function TodoPage() {
  const [todoList, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('todo'));
    console.log(result);
    if (result) {
      setTodos((pre) => [...pre, ...result]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  function handleNewTodo() {
    // setTodos([...todoList, { id: uuid(), todo: input, complete: false }]);
    if (input === '') return;
    setTodos((prev) => {
      return [...prev, { id: uuid(), todo: input, complete: false }];
    });
    setInput('');
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleCheck(id) {
    const newList = [...todoList];
    const todo = newList.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newList);
  }

  const handleClear = () => {
    setTodos((pre) => {
      const result = [...pre].filter((todo) => todo.complete === false);
      return result;
    });
  };
  return (
    <>
      <div>todo List</div>

      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleCheck(todo.id)}
            />
            {todo.todo}
          </li>
        );
      })}

      <input type={'text'} value={input} onChange={handleInput} />

      <button className="btn btn-primary" onClick={handleNewTodo}>
        Add New Todo
      </button>
      <button className="btn btn-secondary" onClick={handleClear}>
        clear finished
      </button>
    </>
  );
}
