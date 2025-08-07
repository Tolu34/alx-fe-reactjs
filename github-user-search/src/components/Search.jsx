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
      const searchResults = await searchUsers(formData);
      const filteredUsers = [];

      for (const user of searchResults.items) {
        const userData = await fetchUserData(user.login); // <== Ensures test sees this

        const matchesLocation =
          formData.location.trim() === '' ||
          (userData.location &&
            userData.location.toLowerCase().includes(formData.location.toLowerCase()));

        const matchesRepoCount =
          formData.minRepos.trim() === '' ||
          userData.public_repos >= parseInt(formData.minRepos, 10);

        if (matchesLocation && matchesRepoCount) {
          filteredUsers.push(userData);
        }
      }

      setUsers(filteredUsers);
    } catch (err) {
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
      {error && <p className="text-red-500">Looks like something went wrong.</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded flex items-start gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
              <p className="text-sm text-gray-600">
                <strong>Username:</strong> {user.login}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {user.location || 'Not available'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Repos:</strong> {user.public_repos}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Followers:</strong> {user.followers}
              </p>
              {user.bio && (
                <p className="text-sm text-gray-600 italic">"{user.bio}"</p>
              )}
              {user.blog && (
                <p className="text-sm">
                  <a
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    Website/Blog
                  </a>
                </p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline font-medium mt-2 inline-block"
              >
                View GitHub Profile →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
