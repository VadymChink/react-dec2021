import React from 'react';
import {Button} from "../Button/Button";

export const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div style={{display:"flex",alignItems:'center', margin:'10px' }}>
            <div style={{width:'300px'}}>{id} --- {title}</div>
            <div><Button to={id.toString()} state={post}>Post Details</Button></div>
        </div>
    );
};