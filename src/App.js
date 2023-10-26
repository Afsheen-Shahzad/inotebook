import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home'
import About from './components/About'
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null)
  //alerts are of different types primary, sucess, warning, dismiss, etc.
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className='container'>
          <Routes>
            <Route exact path="/home" element={<Home  showAlert={showAlert} />} />
            <Route exact path="/about" element={<About showAlert={showAlert}/>} />
            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

// https://reactrouter.com/en/main/start/overview