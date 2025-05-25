import React from 'react';
import { Link } from 'react-router-dom';

function Career({ recommendations }) {
  return (
    <div className="container">
      <h1>Recommended Careers</h1>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <ul>
          {recommendations.map((career, idx) => (
            <li key={idx}>
              {career.name} ({career.keywords.length} skills)
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Search</Link>
    </div>
  );
}

export default Career;
