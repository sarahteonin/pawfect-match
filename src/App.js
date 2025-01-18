import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import Page1 from './pages/page1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/1" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
