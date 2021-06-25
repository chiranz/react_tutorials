import React, { useState } from "react";
import uniquId from "uniqid";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    setTodos([{ id: uniquId(), todo, completed: false }, ...todos]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <h1>My Todos</h1>
      <div
        className="input-field"
        style={{ display: "flex", flexDirection: "column", maxWidth: "20rem" }}
      >
        <label htmlFor="todo">New Todo</label>
        <input
          type="text"
          name="todo"
          placeholder="type new todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={handleAddTodo} style={{ marginTop: 20 }}>
          Add Todo
        </button>
      </div>

      <div className="todos">
        {todos.length > 0 ? (
          // Show todos

          <ul>
            {todos.map(({ todo, completed, id }) => (
              <div
                style={{ display: "flex", justifyContent: "space-around" }}
                key={id}
              >
                <input
                  type="checkbox"
                  checked={completed}
                  value={todo}
                  onChange={(e) => {
                    const editedTodos = todos.map((_todo) => {
                      if (_todo.id === id) {
                        _todo.completed = !completed;
                      }
                      return _todo;
                    });
                    setTodos(editedTodos);
                  }}
                />

                <li
                  style={{
                    textDecorationLine: `${completed ? "line-through" : ""}`,
                  }}
                >
                  {todo}
                </li>
              </div>
            ))}
          </ul>
        ) : (
          <h3>You don't have any todos</h3>
        )}
      </div>
    </div>
  );
}
