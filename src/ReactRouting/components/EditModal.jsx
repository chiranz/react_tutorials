import React from "react";
import Modal from "react-modal";
import { actionTypes, BlogContext } from "../context/BlogContext";

Modal.setAppElement("#root");
export default function EditModal({ blogId }) {
  const {
    dispatch,
    state: { blogToEdit },
  } = React.useContext(BlogContext);
  const [open, setOpen] = React.useState(false);

  const [blog, setBlog] = React.useState({ heading: "", content: "", id: "" });
  React.useEffect(() => {
    if (blogToEdit) {
      setBlog(blogToEdit);
    }
  }, [blogToEdit]);

  const handleUpdate = () => {};
  const handleOpen = () => {
    setOpen(true);
    dispatch({
      type: actionTypes.edit,
      payload: blogId,
    });
  };
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  console.log(blog);
  return (
    <React.Fragment>
      <button onClick={handleOpen}>Edit</button>
      <Modal isOpen={open}>
        <button onClick={() => setOpen(false)}>Close me</button>

        <div className="card">
          <div>
            <input
              type="text"
              name="heading"
              value={blog.heading}
              onChange={handleChange}
              className="inputfield"
            />
          </div>
          <div>
            <textarea
              className="inputfield"
              value={blog.content}
              onChange={handleChange}
              type="text"
              name="content"
            />
          </div>
          <button onClick={handleUpdate}>Update Blog</button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
