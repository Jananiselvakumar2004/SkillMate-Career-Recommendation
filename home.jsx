import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ setRecommendations }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const keywords = input.split(',').map(s => s.trim()).filter(Boolean);

    try {
      const res = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords }),
      });

      const data = await res.json();
      setRecommendations(data.careers || []);
      navigate('/career');
    } catch (err) {
      alert('Failed to fetch recommendations. Please try again.');
      console.error('Fetch error:', err);
    }
  };

  return (
    <div className="container">
      <h1>Career Recommendations</h1>
      <p>Enter keywords (comma separated):</p>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="e.g. javascript, react, css"
      />
      <button onClick={handleSubmit}>Get Recommendations</button>
    </div>
  );
}

export default Home;
