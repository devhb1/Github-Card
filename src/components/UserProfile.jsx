// create a functional component UserProfile whuch have a input field and a button
// when user enter a username and click on search button it will fetch the user data from github api
// and display the user data in the GithubCard component


import React,{useState} from 'react'
import GithubCard from './GithubCard'
import fetchgithubinfo from '../Hooks/fetchgithubinfo'


const UserProfile = () => {

  const [username, setUsername] = useState('')  
  const {userdata,loading,error,fetchuser} = fetchgithubinfo();

  const handleSearch = () => {
    if (username) {
      fetchuser(username);
    }
  };

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center  text-blue-300 shadow-lg'>
     <input 
       type='text'
       placeholder ='Enter Github username'
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       className="p-2 border border-gray-300 rounded-md mr-2" 
     />
     <button 
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-md" 
     >
      Search
     </button>
    
     {/* Conditionally render loading text or error  if loading,error  is true */}
     {loading && <h1 className='text-center '>Loading......</h1>}
      {error && <h1 className='text-center text-red-500'>{error}</h1>}
    {/* Render the GitHubInfoCard component and pass the user data as a prop */}
       <GithubCard user ={userdata} />
    
    </div>
    </div>
    </>
  )


}

export default UserProfile
