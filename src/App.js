import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/portpolio" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
