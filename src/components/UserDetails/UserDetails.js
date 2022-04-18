import React from 'react';
import {Button} from "../Button/Button";

export const UserDetails = ({user}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <hr/>
            <Button to={'posts'} >Posts</Button>
        </div>
    );
};