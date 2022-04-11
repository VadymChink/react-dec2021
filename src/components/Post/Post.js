import React from 'react';

import './post.css';

export const Post = ({post}) => {
    const {id,userId,title,body} = post
    return (
        <div className={'post'}>
            <div>ID: {id}</div>
            <div>UserId: {userId}</div>
            <div>title: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};