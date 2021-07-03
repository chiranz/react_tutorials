import React, { useState } from "react";
import uniquId from "uniqid";
import Modal from "./Modal";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([
    { id: uniquId(), todo: "Do something", completed: true },
    { id: uniquId(), todo: "Run away", completed: false },
    { id: uniquId(), todo: "Run away1", completed: false },
    { id: uniquId(), todo: "Run away2", completed: false },
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    setTodos([{ id: uniquId(), todo, completed: false }, ...todos]);
    setTodo("");
  };

  const handleEdit = (id) => {
    console.log(id);
    todos.map((todo) => {
      if (todo.id == id) {
        setEditTodo(todo);
      }
    });
    setShowDialog(true);
  };

  const handleUpdate = (id, updatedTodo) => {};

  const handleDelete = (id) => {
    const editedTodos = [];
    for (let todo of todos) {
      if (todo.id !== id) {
        editedTodos.push(todo);
      }
    }
    setTodos(editedTodos);
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

  return (
    <div>
      <h1>My Todos</h1>

      {/*TODO: INPUT COMPONENT */}
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
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </ul>
        ) : (
          <h3>You don't have any todos</h3>
        )}
      </div>
      <Modal
        showModal={showDialog}
        handleUpdate={handleUpdate}
        setShowDialog={setShowDialog}
        editTodo={editTodo}
      />
    </div>
  );
}
