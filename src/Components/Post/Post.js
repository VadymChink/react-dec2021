import React from 'react';
import './Post.css'

export const Post = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <span>Post id: {id}</span>
            <span>User id: {userId}</span>
            <span>Title: {title}</span>
            <div>Body: {body}</div>
        </div>
    );
};