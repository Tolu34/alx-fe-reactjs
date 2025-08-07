import React, { useState } from 'react';

import {fetchUserData} from '../services/githubService;'

const Search = () => {
    const [username, setUserName] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError(false);
        setUser(null);

        try {
         const data = await fetchUserData(username);
         setUser(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter GitHub username"
                className="border p-2 rounded w-full"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2 rounded w-full">
                    Search
                </button>
            </form>

            {loading && <p className="text-gray-700">Loading...</p>}
            {error &&<p className="text-red-600" >Looks like we cant find the user.</p>}
            {user && (
                <div className="border rounded p-4 mt-4 text-center">
                    <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full"/>
                    <h2 className="text-xl font-semibold">{user.name || user,login}</h2>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> 
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
};
export default Search;