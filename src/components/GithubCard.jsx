//create a functional component githubcar takes in user as a prop
//if user is not found return a div with a message USER NOT FOUND
//else return a div with user data


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
    <div className='max-w-sm mx-auto bg-slate-600 overflow-hidden rounded-lg'>
      <img className='w-full object-cover h-48' src={user.avatar_url} alt='User Avatar' />
      <div className='p-6'>
        <h2 className='font-semibold text-black'>{user.name || 'No Name'}</h2>
        <h3>{user.login || 'No Login username'}</h3>
        <h3>{user.bio || 'No Bio'}</h3>
      </div>
      <div className=' mt-4 flex items-center justify-between'>
        <span className='ml-4'>Followers: {user.followers}</span>
        <span className='mr-4'>Following: {user.following}</span>
      </div>
      <div>
        <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-blue-500 hover:underline'
        >
          View profile
          </a>
      </div>
    </div>
  );
}

export default GithubCard;
