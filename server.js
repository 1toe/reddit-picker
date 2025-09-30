const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory (React build)
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint to proxy Reddit requests (avoids CORS issues)
app.get('/api/reddit/:subreddit', async (req, res) => {
  try {
    const { subreddit } = req.params;
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`, {
      headers: {
        'User-Agent': 'RedditPicker/1.0.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Reddit API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Reddit data:', error);
    res.status(500).json({ error: 'Failed to fetch Reddit data' });
  }
});

// Serve React app for all other routes (catch-all middleware)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Reddit Picker server is running on http://localhost:${PORT}`);
});
