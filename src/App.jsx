import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import RedditButtons from './components/RedditButtons';
import PostCard from './components/PostCard';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    prefersDarkScheme.addEventListener('change', handleChange);
    return () => prefersDarkScheme.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const fetchPost = async (subreddit) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/reddit/${subreddit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const data = await response.json();
      const postData = data[0].data.children[0].data;
      setPost(postData);
    } catch (err) {
      console.error('Error fetching post:', err);
      setError(language === 'en' 
        ? 'Failed to fetch post. Please try again.' 
        : 'Error al obtener la publicación. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'es' : 'en');
  };

  const texts = {
    en: {
      title: 'r/Reddit-Picker',
      askReddit: 'r/AskReddit',
      askRedditEspanol: 'r/AskRedditEspañol',
      changeLang: 'Change to Spanish',
      readMore: 'Read More',
      noPost: 'Click "Read More" to view the full post.'
    },
    es: {
      title: 'r/Reddit-Picker',
      askReddit: 'r/AskReddit',
      askRedditEspanol: 'r/AskRedditEspañol',
      changeLang: 'Cambiar a Inglés',
      readMore: 'Leer Más',
      noPost: 'Haz clic en "Leer Más" para ver la publicación completa.'
    }
  };

  const t = texts[language];

  return (
    <div className="container text-center my-5">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <h1 className="mb-4">{t.title}</h1>
      <RedditButtons 
        onFetchAskReddit={() => fetchPost('askreddit')}
        onFetchAskRedditEspanol={() => fetchPost('AskRedditEspanol')}
        texts={t}
        loading={loading}
      />
      <LanguageToggle 
        language={language} 
        onToggle={toggleLanguage}
        text={t.changeLang}
      />
      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          {error}
        </div>
      )}
      <PostCard post={post} texts={t} />
    </div>
  );
}

export default App;
