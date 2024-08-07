const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Use the cors middleware to allow all origins
app.use(cors());

app.get('/', (req, res) => {
  res.json({ url: 'https://jogo558.com/index?type=4&channelId=5452' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
