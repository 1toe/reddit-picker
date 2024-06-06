document.getElementById('fetchPost').addEventListener('click', async () => {
    const subreddit = 'askreddit'; // Change this to any subreddit you want
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`);
    const data = await response.json();
    const post = data[0].data.children[0].data;
  
    document.getElementById('postTitle').textContent = post.title;
    document.getElementById('postContent').textContent = post.selftext || "Click 'Read More' to view the full post.";
    document.getElementById('postLink').href = `https://www.reddit.com${post.permalink}`;
  });
  