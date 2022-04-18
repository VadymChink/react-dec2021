import React from 'react';
import {Link} from "react-router-dom";

export const Button = ({to,state,children, ...arg}) => {

    return (
        <Link to={to} state={state}>
            <button {...arg}>{children}</button>
        </Link>
    );
};