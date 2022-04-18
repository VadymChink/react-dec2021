import React from 'react';
import {Link} from "react-router-dom";

export const UserDetails = ({state}) => {

    const {id, name, username, email, phone, website, address: {street, suite, city}} = state;

    return (
        <div>
            <div>Id: {id} Name: {name}</div>
            <div>Username: {username} Email: {email}</div>
            <div>Phone: {phone} Website: {website}</div>
            <div>Street: {street} Suite: {suite} City: {city}</div>
            <hr/>
            <Link to={id.toString()}>
                <button>Posts</button>
            </Link>
        </div>
    );
};




