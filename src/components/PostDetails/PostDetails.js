import React from 'react';
import {Link} from "react-router-dom";

export const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>ID: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>
            <Link to={id.toString()}>
            <button>comments</button>
            </Link>
            <hr/>
        </div>
    );
};