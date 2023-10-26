import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home'
import About from './components/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message={"This is amazing react course"} />
          <div className='container'>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

// https://reactrouter.com/en/main/start/overview