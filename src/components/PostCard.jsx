import React from 'react';

function PostCard({ post, texts }) {
  if (!post) {
    return null;
  }

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.selftext || texts.noPost}
        </p>
        <a 
          href={`https://www.reddit.com${post.permalink}`} 
          className="btn btn-info" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {texts.readMore}
        </a>
      </div>
    </div>
  );
}

export default PostCard;
