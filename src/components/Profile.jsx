import React from 'react';

const User = ({ name, email, profile }) => {
    return (
        <div>
            <img src={profile} alt="" />
            <h2>Name: {name}</h2>
            <p>Mail: {email}</p>
        </div>
    );
}

export default User;
