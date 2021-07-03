import React, { useEffect, useState } from "react";

export default function Modal({
  editTodo,
  showModal,
  handleUpdate,
  setShowDialog,
}) {
  const [todo, setTodo] = useState("");
  //   COMPONENTDIDMOUNT
  useEffect(() => {
    // setLoadingTrue
    // await fetchData
    // setLoading false
    // if loading show loading screen
    // if data.length show formatted data
    // if data.length == 0 Nothing to show
  }, []);

  //   COMPONENT DID UPDATE
  useEffect(() => {
    console.log("Called");
    editTodo ? setTodo(editTodo.todo) : setTodo("");
  }, [editTodo]);

  if (showModal) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "gray",
          opacity: "0.85",
          display: "grid",
          placeContent: "center",
        }}
      >
        <form onSubmit={handleUpdate()}>
          <h2>Edit Todo</h2>
          <input
            type="text"
            name=""
            id=""
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input type="submit" value="Update" />
          <input
            type="submit"
            value="Close"
            onClick={() => setShowDialog(false)}
          />
        </form>
      </div>
    );
  }
  return null;
}
