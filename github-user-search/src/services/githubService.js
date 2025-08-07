export const searchUsers = async ({ username }) => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(username)}`
  );
  if (!response.ok) {
    throw new Error('Failed to search users');
  }
  return await response.json();
};

export const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return await response.json();
};
