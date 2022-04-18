import React from 'react';

export const PostComment = ({comment}) => {
    const {postId,id, name,email,body} = comment;
    return (
        <div>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};