import React, { UserContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
    const userData = UserContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}