document.getElementById('fetchPost').addEventListener('click', async () => {
  const subreddit = 'askreddit'; // Ruta al subreddit
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`);
  const data = await response.json();
  const post = data[0].data.children[0].data;

  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postContent').textContent = post.selftext || "Click 'Read More' to view the full post.";
  document.getElementById('postLink').href = `https://www.reddit.com${post.permalink}`;
});

document.getElementById('changeLang').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;

  if (currentLang === 'en') {
    document.documentElement.lang = 'es';
    document.getElementById('title').textContent = 'r/Reddit-Picker';
    document.getElementById('fetchPost').textContent = 'Obtener Publicación Aleatoria';
    document.getElementById('changeLang').textContent = 'Cambiar a Inglés';
    document.getElementById('postContent').textContent = 'Haz clic en "Leer Más" para ver la publicación completa.';
    document.getElementById('postLink').textContent = 'Leer Más';
  } else {
    document.documentElement.lang = 'en';
    document.getElementById('title').textContent = 'r/RandomPost';
    document.getElementById('fetchPost').textContent = 'Get Random Post';
    document.getElementById('changeLang').textContent = 'Change to Spanish';
    document.getElementById('postContent').textContent = 'Click "Read More" to view the full post.';
    document.getElementById('postLink').textContent = 'Read More';
  }
});
