import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  return (
    <div>
      <div className="container mt-3">
        <h2 className="text-center">Add a Note</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
              onChange={onChange}
              value={note.title}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter Description"
              onChange={onChange}
              value={note.description}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter Tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
