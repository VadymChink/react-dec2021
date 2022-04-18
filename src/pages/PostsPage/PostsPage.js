import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../../components";

export const PostsPage = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div style={{display:"flex"}}>
            <div>{posts && posts.map((post) => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};