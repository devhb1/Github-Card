// we created a custom hook to fetch data from the github api
//used 3 states to manage the data, loading and error states
//then created a fetch user function to fetch data from the api
//finally returned all states and the fetch user function in an object


import { useState } from 'react';


const fetchgithubinfo = () => { 

    const[userdata, setUserdata] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const fetchuser = async (username) => {
        setLoading(true);
        setError(null);

        try{ 

            const response = await fetch(`https://api.github.com/users/${username}`);
          
            if (!response.ok) {
                throw new Error('User not found'); // Throw an error if user is not found
              }
      
                // Parse the JSON response data
                const data = await response.json();
                setUserdata(data); // Set the user state with the fetched data
        }
        catch(error){
            setError(error.message);
        }
        finally{
          setLoading(false);  
        }
    };
    return {userdata, loading, error, fetchuser};
}

export default fetchgithubinfo;