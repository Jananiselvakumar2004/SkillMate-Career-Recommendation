import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Career from './Career';
import './styles.css';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setRecommendations={setRecommendations} />} />
        <Route path="/career" element={<Career recommendations={recommendations} />} />
      </Routes>
    </Router>
  );
}

export default App;
