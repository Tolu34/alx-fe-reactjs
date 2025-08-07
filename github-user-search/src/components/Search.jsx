import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: ''
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await searchUsers(formData);

      const filteredUsers = await Promise.all(
        results.items.map(async (user) => {
          const userData = await fetchUserData(user.login);

          const matchesLocation = formData.location
            ? userData.location?.toLowerCase().includes(formData.location.toLowerCase())
            : true;

          const matchesMinRepos = formData.minRepos
            ? userData.public_repos >= parseInt(formData.minRepos)
            : true;

          return matchesLocation && matchesMinRepos ? userData : null;
        })
      );

      setUsers(filteredUsers.filter(Boolean));
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          value={formData.minRepos}
          onChange={handleChange}
          placeholder="Min Repositories"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Something went wrong. Please try again.</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              {user.location && <p className="text-sm text-gray-600">📍 {user.location}</p>}
              <p className="text-sm text-gray-600">📦 {user.public_repos} repositories</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
