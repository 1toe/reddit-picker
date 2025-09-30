import React from 'react';

function ThemeToggle({ theme, onToggle }) {
  return (
    <button 
      className="btn btn-outline-secondary btn-toggle-theme"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      <i className={`fas fa-${theme === 'dark' ? 'moon' : 'sun'}`}></i>
    </button>
  );
}

export default ThemeToggle;
