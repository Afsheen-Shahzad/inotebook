import React,{useContext, useState} from 'react'
import NoteContext from '../Context/notes/NoteContext';

const AddNote = () => {


    const context = useContext(NoteContext)
    const {addNote} = context;
    
    const [note, setnote] = useState({title:'',description:'',tags:''})
    const handleClicked=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tags)
        ///after adding teh note the values in the input field will vanish
        setnote({title:'',description:'',tags:''});
    }

    const onChange = (event)=>{
        setnote({...note,[event.target.name]:event.target.value})
        
    }
  return (
    <div>
        <h2>Add a Note</h2>
        <form action="" className='my-3'>
            <div className='my-3'>
                <label htmlFor="title" className='form-label'>Title</label>
                <input type="text" className='form-control' id='title' name="title" value={note.title} onChange={onChange} minLength={3} required />
            </div>
            <div className='my-3'>
            <label htmlFor="description" className='form-label'>description</label>
                <input type="text" className='form-control' id='description' name='description' value={note.description} onChange={onChange} minLength={6} required />
            </div>
            <div className='my-3'>
            <label htmlFor="tags" className='form-label'>Tags</label>
                <input type="text" className='form-control' id='tags' name='tags' value={note.tags} onChange={onChange}/>
            </div>
            <button disabled={note.title.length<3 || note.description.length<6} type='submit' className='btn btn-primary' onClick={handleClicked}>Add Note</button>
        </form>
    </div>
  )
}

export default AddNote