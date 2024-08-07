const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Use the cors middleware to allow all origins
app.use(cors());

app.get('/', (req, res) => {
  res.json({ url: 'https://www.google.com' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
