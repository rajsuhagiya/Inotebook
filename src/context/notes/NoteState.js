import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Raj",
    class: "MSD",
  };

  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "jay",
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state: state, update: update }}>
      {/* <NoteContext.Provider value={{ state, update }}> */}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
