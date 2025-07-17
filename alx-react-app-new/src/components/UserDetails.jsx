import React, { useContext } from 'react';
import UserContext from './UserContext'; // Make sure this path is correct

function UserDetails() {
  const userData = useContext(UserContext); // ✅ Use useContext properly

  return (
    <div style={{ border: '2px solid #eee', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
