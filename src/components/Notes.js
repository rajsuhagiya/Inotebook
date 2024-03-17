import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const handleUpdate = () => {
    // e.prevenDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Notes
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="etitle">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    placeholder="Enter Title"
                    onChange={onChange}
                    value={note.etitle}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="edescription">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    placeholder="Enter Description"
                    onChange={onChange}
                    value={note.edescription}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="etag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    placeholder="Enter Tag"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <AddNote />
      <div className="row mt-3">
        <h2 className="text-center">Your Notes</h2>
        <div className="container">
          {notes.length === 0 && (
            <div className="text-center">
              <div className="alert alert-dark" role="alert">
                Add your First Note.
              </div>
            </div>
          )}
        </div>
        {notes?.map((note, key) => {
          return <NoteItem key={key} note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
};

export default Notes;
