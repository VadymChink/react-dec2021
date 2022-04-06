import React from 'react';
import './Comment.css'

export const Comment = ({comment}) => {

    const {body,email,id,name,postId} = comment;

    return (
        <div className={'comment'}>
            <h2>Comment ID: {id}</h2>
            <h3>Post ID: {postId}</h3>
            <div>{body}</div>
            <div>{email}</div>
            <div>{name}</div>
        </div>
    );
};

