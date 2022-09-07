import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;