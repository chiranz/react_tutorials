import React from "react";
import Modal from "react-modal";
import { actionTypes, BlogContext } from "../context/BlogContext";

Modal.setAppElement("#root");
export default function EditModal({ blogId }) {
  const { dispatch } = React.useContext(BlogContext);
  const [open, setOpen] = React.useState(false);
  const handleUpdate = () => {};
  const handleOpen = () => {
    setOpen(true);
    dispatch({
      type: actionTypes.edit,
      payload: blogId,
    });
  };
  return (
    <React.Fragment>
      <button onClick={handleOpen}>Edit</button>
      <Modal isOpen={open}>
        <button onClick={() => setOpen(false)}>Close me</button>

        <div className="card">
          <div>
            <input type="text" name="heading" className="inputfield" />
          </div>
          <div>
            <textarea className="inputfield" type="text" name="content" />
          </div>
          <button onClick={handleUpdate}>Update Blog</button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
