import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from './Layout/DefaultLayout';
import Home  from './Layout/Home';

function App() {
  // const location = useLocation();
  // const background = location.state && location.state.background;
  return (
    <div className="app">
      <Routes>
        
      <Route path="/" element={<Home/>}/>
        <Route path="*" element={<DefaultLayout />} />
      
        </Routes>
      
    </div>
  );
}

export default App;
