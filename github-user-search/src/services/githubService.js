// GitHub User Search API with support for advanced query parameters

export const searchUsers = async ({ username, location, minRepos }) => {
  // Construct the search query
  let query = username || '';

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to search users');
  }

  return await response.json(); // returns an object with `items`
};

export const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  return await response.json();
};
