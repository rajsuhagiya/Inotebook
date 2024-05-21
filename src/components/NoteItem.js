import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import { toast } from "react-toastify";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  //   const handleEdit = () => {
  //     toast.success("Success Notification !");
  //   };
  return (
    <>
      <div className="col-md-3 p-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{note.title}</h5>
              <div className="text-center">
                <i
                  className="fa-solid fa-pen-to-square mx-2 text-success"
                  onClick={() => updateNote(note)}
                ></i>
                <i
                  className="fa-solid fa-trash mx-2 text-danger"
                  onClick={() => {
                    deleteNote(note._id);
                    toast.success("Note Deleted Successfully");
                  }}
                ></i>
              </div>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
