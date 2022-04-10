import React from 'react';

export const User = ({user, setUser, setUserId}) => {
    const {id, name} = user
    return (
        <div>
            {id}------{name}
            <button onClick={() => {
                setUser(user)
                setUserId(null)
            }}>Info User
            </button>
        </div>
    );
};