import { useState } from 'react';


const fetchgithubinfo = () => { 

    const[userdata, setUserdata] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    //create fetch user function
    //return all states + fetch user fnc in an object

    const fetchuser = async (username) => {
        setLoading(true);
        setError(null);

        try{ 
// here to logic to fetch data from api 
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