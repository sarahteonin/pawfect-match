import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
        <Route path="/7" element={<Page7 />} />
        <Route path="/8" element={<Page8 />} />
        <Route path="/9" element={<Page1 />} />
        <Route path="/10" element={<Page1 />} />
        <Route path="/11" element={<Page1 />} />
        <Route path="/12" element={<Page1 />} />
        <Route path="/13" element={<Page1 />} />
        <Route path="/14" element={<Page1 />} />
        <Route path="/15" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;
