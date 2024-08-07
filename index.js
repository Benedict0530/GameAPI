const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ url: 'https://www.google.com' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
