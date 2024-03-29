import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from './Layout/DefaultLayout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </div>
  );
}

export default App;
