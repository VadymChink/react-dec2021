import React from 'react';
import {Button} from "../Button/Button";

export const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div style={{width:'300px'}}>{id} -- {name}
            <Button to={id.toString()} state={user}>get Details</Button>
            </div>
        </div>
    );
};