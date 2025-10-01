import React from 'react';

function RedditButtons({ onFetchAskReddit, onFetchAskRedditEspanol, texts, loading }) {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
      <button 
        className="btn btn-primary"
        onClick={onFetchAskReddit}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
          </>
        ) : texts.askReddit}
      </button>
      <button 
        className="btn btn-primary"
        onClick={onFetchAskRedditEspanol}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Loading...
          </>
        ) : texts.askRedditEspanol}
      </button>
    </div>
  );
}

export default RedditButtons;
