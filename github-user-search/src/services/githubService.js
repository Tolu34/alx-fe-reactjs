import axios from 'axios';

// Advanced GitHub User Search
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items; // returns an array of users
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};
