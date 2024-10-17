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
    <div>
     <input 
       type='text'
       placeholder ='Enter Github username'
       value={username}
       onChange={(e) => setUsername(e.target.value)}
     
     />
     <button 
        onClick={handleSearch}
     >
      Search
     </button>

       <GithubCard user ={userdata} />
    </div>

    </>
  )


}

export default UserProfile
