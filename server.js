const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to proxy Reddit requests (avoids CORS issues)
app.get('/api/reddit/:subreddit', async (req, res) => {
  try {
    const { subreddit } = req.params;
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Reddit data:', error);
    res.status(500).json({ error: 'Failed to fetch Reddit data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Reddit Picker server is running on http://localhost:${PORT}`);
});
