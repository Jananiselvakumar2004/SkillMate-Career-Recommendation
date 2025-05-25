const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const careers = [
  { id: 1, name: 'Data Scientist', keywords: ['data', 'science', 'machine learning', 'ai'] },
  { id: 2, name: 'Web Developer', keywords: ['web', 'javascript', 'react', 'frontend', 'backend'] },
  { id: 3, name: 'Graphic Designer', keywords: ['design', 'creative', 'photoshop', 'illustrator'] },
];

app.post('/api/recommend', (req, res) => {
  const { keywords } = req.body;

  if (!keywords || !Array.isArray(keywords)) {
    return res.status(400).json({ error: 'Keywords must be an array' });
  }

  const lowerKeywords = keywords.map(k => k.toLowerCase());

  const recommendations = careers.filter(career =>
    career.keywords.some(ck =>
      lowerKeywords.some(kw => ck.includes(kw))
    )
  );

  res.json({ careers: recommendations });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
