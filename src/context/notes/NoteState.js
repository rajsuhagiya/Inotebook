import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get All Notes
  //Add a note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmU5ZWExNjg5Y2FiMjFiMDhmZWU0In0sImlhdCI6MTcxMDAxMzA0N30.TagbF3DZkH95-JmBEOvm1mmOR6No40gJFkVq0ZWBYD4",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmU5ZWExNjg5Y2FiMjFiMDhmZWU0In0sImlhdCI6MTcxMDAxMzA0N30.TagbF3DZkH95-JmBEOvm1mmOR6No40gJFkVq0ZWBYD4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmU5ZWExNjg5Y2FiMjFiMDhmZWU0In0sImlhdCI6MTcxMDAxMzA0N30.TagbF3DZkH95-JmBEOvm1mmOR6No40gJFkVq0ZWBYD4",
      },
    });
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZmU5ZWExNjg5Y2FiMjFiMDhmZWU0In0sImlhdCI6MTcxMDAxMzA0N30.TagbF3DZkH95-JmBEOvm1mmOR6No40gJFkVq0ZWBYD4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    //logic to edit in client
    const newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {/* <NoteContext.Provider value={{ state, update }}> */}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
