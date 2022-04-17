import React from 'react';

import {Button} from "../Button/Button";
import css from'./Post.module.css';

export const Post = ({post}) => {
    const { id, title} = post
    return (
        <div className={css.post}>
            <div>{id}---{title}</div>
            <Button to={id.toString()} state={post}>Get Details</Button>
        </div>
    );
};
