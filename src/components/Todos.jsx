import React, { useState, useReducer } from "react";
import uniqId from "uniqid";
import Modal from "./Modal";
import Todo from "./Todo";

const initialState = {
  todos: [
    { id: uniqId(), todo: "Do something", completed: true },
    { id: uniqId(), todo: "Run away", completed: false },
    { id: uniqId(), todo: "Run away1", completed: false },
    { id: uniqId(), todo: "Run away2", completed: false },
  ],
  showDialog: false,
  editTodo: null,
};

export const actionTypes = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  ADD: "ADD_TODO",
  DELETE: "DELETE_TODO",
  EDIT: "EDIT_TODO",
  UPDATE: "UPDATE_TODO",
  TOGGLE: "TOGGLE_TODO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        todos: [
          { id: uniqId(), todo: action.payload, completed: false },
          ...state.todos,
        ],
      };

    case actionTypes.TOGGLE:
      // TODO: REOLVE TOGGLE TODOS
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          if (_todo.id === action.payload) {
            _todo.completed = !_todo.completed;
          }
          return _todo;
        }),
      };

    case actionTypes.DELETE:
      const editedTodos = [];
      for (let todo of state.todos) {
        if (todo.id !== action.payload) {
          editedTodos.push(todo);
        }
      }
      return { ...state, todos: editedTodos };

    case actionTypes.EDIT:
      let editTodo;
      console.log(action.payload);
      for (let todo of state.todos) {
        console.log(todo);
        if (todo.id == action.payload) {
          editTodo = todo;
        }
      }
      return { ...state, editTodo, showDialog: true };

    case actionTypes.UPDATE:
      console.log(action.payload);
      const { todo, id } = action.payload;
      console.log({ todo, id });
      return {
        ...state,
        todos: state.todos.map((_todo) => {
          if (_todo.id === id) {
            _todo.todo = todo;
          }
          return _todo;
        }),
        showDialog: false,
      };

    case actionTypes.TOGGLE_MODAL:
      return { ...state, showDialog: !state.showDialog };

    default:
      return state;
  }
};

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog, editTodo, todos } = state;

  const [todo, setTodo] = useState("");
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

        <button
          onClick={() => dispatch({ type: actionTypes.ADD, payload: todo })}
          style={{ marginTop: 20 }}
        >
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
                dispatch={dispatch}
              />
            ))}
          </ul>
        ) : (
          <h3>You don't have any todos</h3>
        )}
      </div>
      <Modal showModal={showDialog} editTodo={editTodo} dispatch={dispatch} />
    </div>
  );
}
