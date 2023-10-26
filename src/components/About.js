import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext);
  
  const {s1} = a
  return (
    <div>This is About {s1.name} and class is {s1.class}</div>
  )
}

export default About