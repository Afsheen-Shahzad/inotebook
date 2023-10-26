
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    "name": "harry",
    "class": "5b"
  }

  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjY2YTdkNmU5YWY0ZmIxZGM0NzQ1In0sImlhdCI6MTY5NzgwNDc2Mn0.ffgVNBRX2Gx-_b6v2vZ1upFoCJoxnKRxRCpQ6xsNYnM"
      }
    });
    const json = await response.json()
    setNotes(json)
  }
  //Add a note
  const addNote = async (title, description, tags) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addanote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjY2YTdkNmU5YWY0ZmIxZGM0NzQ1In0sImlhdCI6MTY5NzgwNDc2Mn0.ffgVNBRX2Gx-_b6v2vZ1upFoCJoxnKRxRCpQ6xsNYnM"
      },
      body: JSON.stringify({title, description, tags})
    });
     const note=await response.json();
    setNotes(notes.concat(note))
  }
  //Delete a note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjY2YTdkNmU5YWY0ZmIxZGM0NzQ1In0sImlhdCI6MTY5NzgwNDc2Mn0.ffgVNBRX2Gx-_b6v2vZ1upFoCJoxnKRxRCpQ6xsNYnM"
      },
    });
    const json= response.json();
    
//////////////
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }
  //Edit a note

    const editNote = async (id, title, description, tags) => {
      // API Call 
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjY2YTdkNmU5YWY0ZmIxZGM0NzQ1In0sImlhdCI6MTY5NzgwNDc2Mn0.ffgVNBRX2Gx-_b6v2vZ1upFoCJoxnKRxRCpQ6xsNYnM"
        },
        body: JSON.stringify({title, description, tags})
      });
      const json = await response.json();
  
       let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tags = tags; 
          break; 
        }
      }  
      setNotes(newNotes);
    }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes,s1 }}>
      {props.children}
    </NoteContext.Provider>

  )
}

export default NoteState;



///https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


