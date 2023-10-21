import './App.css';
import Navbar from './components/Navbar';
import {Home} from './components/Home'
import About from './components/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;

// https://reactrouter.com/en/main/start/overview