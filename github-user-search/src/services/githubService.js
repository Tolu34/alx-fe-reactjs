const BASE_URL = 'https://api.github.com';

/**
 * Search GitHub users by username.
 * @param {Object} params - The search form data.
 * @param {string} params.username - GitHub username to search.
 * @returns {Promise<Object>} GitHub search results.
 */
export const searchUsers = async ({ username }) => {
  const query = `q=${encodeURIComponent(username)} in:login&type=Users`;
  const response = await fetch(`${BASE_URL}/search/users?${query}`);
  if (!response.ok) throw new Error('Failed to search users');
  return await response.json();
};

/**
 * Fetch full user data by username.
 * @param {string} username - GitHub username.
 * @returns {Promise<Object>} GitHub user data.
 */
export const fetchUserData = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) throw new Error(`Failed to fetch user: ${username}`);
  return await response.json();
};
