import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile(props) {
const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px'}}>
      <h2 style={{ color: 'blue' }}>{props.name}User Profile</h2>
       <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p>Age: <span style={{ fontWeight:'bold'}}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  )
}
export default UserProfile;