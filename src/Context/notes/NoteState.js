
import NoteContext from "./NoteContext";

const NoteState = (props)=> {
    const s1 = {
        "name" : "harry",
        "class": "5b"
    }

    
    return(
        <NoteContext.Provider value={s1}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;