const postBox = document.getElementById('postBox');
const toggleThemeBtn = document.getElementById('toggleTheme');
const themeIcon = toggleThemeBtn.querySelector('i');

const fetchPost = async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`);
  const data = await response.json();
  const post = data[0].data.children[0].data;

  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postContent').textContent = post.selftext || "Click 'Read More' to view the full post.";
  document.getElementById('postLink').href = `https://www.reddit.com${post.permalink}`;
  
  postBox.classList.remove('d-none');
};

document.getElementById('fetchAskReddit').addEventListener('click', () => fetchPost('askreddit'));
document.getElementById('fetchAskRedditEspanol').addEventListener('click', () => fetchPost('AskRedditEspanol'));

document.getElementById('changeLang').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;

  if (currentLang === 'es') {
    document.documentElement.lang = 'en';
    document.getElementById('title').textContent = 'r/Reddit-Picker';
    document.getElementById('fetchAskReddit').textContent = 'r/AskReddit';
    document.getElementById('fetchAskRedditEspanol').textContent = 'r/AskRedditEspañol';
    document.getElementById('changeLang').textContent = 'Change to Spanish';
    document.getElementById('postContent').textContent = 'Click "Read More" to view the full post.';
    document.getElementById('postLink').textContent = 'Read More';
  } else {
    document.documentElement.lang = 'es';
    document.getElementById('title').textContent = 'r/Reddit-Picker';
    document.getElementById('fetchAskReddit').textContent = 'r/AskReddit';
    document.getElementById('fetchAskRedditEspanol').textContent = 'r/AskRedditEspañol';
    document.getElementById('changeLang').textContent = 'Cambiar a Inglés';
    document.getElementById('postContent').textContent = 'Haz clic en "Leer Más" para ver la publicación completa.';
    document.getElementById('postLink').textContent = 'Leer Más';
  }
});

const applyTheme = (theme) => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
};

toggleThemeBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');

prefersDarkScheme.addEventListener('change', (e) => {
  applyTheme(e.matches ? 'dark' : 'light');
});