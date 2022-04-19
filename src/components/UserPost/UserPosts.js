import React from 'react';
export const UserPosts = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};