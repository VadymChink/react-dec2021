import React from 'react';
import {Button} from "../Button/Button";

export const User = ({user}) => {
    const {id, name} = user;
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',width:'350px', height:"50px", marginRight:'20px'}}>
            <div>{id} == {name}</div>
            <div><Button to={id.toString()} state={user}>Get Details</Button></div>
        </div>
    );
};