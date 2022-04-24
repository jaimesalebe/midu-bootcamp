
import { useState } from 'react';
import './index.css';
import { Note } from './Note';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [shoAll, setShowAll] = useState(true);
  
  const handleChange = (e) => {
    setNewNote(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Click');

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);
    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  }

  const handleShowAll = () =>{
    setShowAll(() => !shoAll);
  }

  if(typeof notes === 'undefined' || notes.length === 0){ //Hacemos la condición por si el array viene vacio o es undefined (Buena practica)
    return "No hay notas que mostrar"
  }
  else{
    return (
      <div>
        <h1 > Notes</h1>
        <button onClick={handleShowAll}>{shoAll ? 'Show only important': 'Show All'}</button>
        <ol>
          {notes.filter((notes) => {
            if (shoAll === true) return true;
            return notes.important === true;
          })
          .map((notes) => (
            <Note key={notes.id} content={notes.content} date={notes.date} />
          ))} 
        </ol>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newNote}/>
          <button>Create Note</button>
          {/* Semanticamente el ultimo botón en un formulario es un submit por tal razón cuando se de enter tendrá el comportamiento de este mismo */}
        </form>
      </div>
    );
  }
}
