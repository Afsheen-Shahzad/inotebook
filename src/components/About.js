import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext);
  
  
  return (
    <div>This is About {a.name} and class is {a.class}</div>
  )
}

export default About