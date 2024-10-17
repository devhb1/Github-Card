import React from 'react';

const GithubCard = ({ user }) => {
  if (!user) {
    return (
      <div className='text-center bg-red-600'>
        USER NOT FOUND
      </div>
    );
  }

  return (
    <div className='mx-auto bg-slate-600 overflow-hidden'>
      <img src={user.avatar_url} alt='User Avatar' />
      <div>
        <h2>{user.name || 'No Name'}</h2>
        <h3>{user.login || 'No Login username'}</h3>
        <h3>{user.bio || 'No Bio'}</h3>
      </div>
      <div>
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
      </div>
      <div>
        <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        >
          View profile
          </a>
      </div>
    </div>
  );
}

export default GithubCard;
