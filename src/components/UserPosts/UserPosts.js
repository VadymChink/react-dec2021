import React from 'react';

export const UserPosts = ({posts}) => {
    const {userId, id, title, body} = posts;

    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};