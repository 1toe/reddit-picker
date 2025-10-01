import React from 'react';

function LanguageToggle({ language, onToggle, text }) {
  return (
    <button 
      className="btn btn-secondary mb-4"
      onClick={onToggle}
    >
      {text}
    </button>
  );
}

export default LanguageToggle;
