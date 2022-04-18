import React from 'react';
import {Button} from "../Button/Button";

export const PostDetails = ({post}) => {
    const {userId,id,title,body} = post;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <Button to={'comments'}>Comments</Button>
            <hr/>
        </div>
    );
};