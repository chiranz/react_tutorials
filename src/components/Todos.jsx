import React, { useState } from "react";
import uniquId from "uniqid";
import Todo, { Button } from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    setTodos([{ id: uniquId(), todo, completed: false }, ...todos]);
    setTodo("");
  };

  const toggleTodo = (id) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(editedTodos);
  };
  console.log(todos);
  return (
    <div>
      <h1>My Todos</h1>

      <div style={{ margin: "2rem 0" }}>
        <Button
          actionText="submit"
          onClick={() => console.log("Submit")}
          bgColor="red"
        />
        <Button
          actionText="read"
          onClick={() => console.log("Read")}
          bgColor="green"
        />
        <Button
          actionText="next"
          onClick={() => console.log("Next")}
          bgColor="yellow"
        />
        <Button
          actionText="back"
          onClick={() => console.log("Back")}
          bgColor="gray"
        />
      </div>
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
              <Todo
                todo={todo}
                completed={completed}
                id={id}
                key={id}
                onChange={toggleTodo}
              />
            ))}
          </ul>
        ) : (
          <h3>You don't have any todos</h3>
        )}
      </div>
    </div>
  );
}
