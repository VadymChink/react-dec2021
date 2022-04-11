import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postsService.getAll()
            .then(({data})=>data.slice(0,10))
            .then((data) => setPosts(data))
    }, [])
    return (
        <div>
            {posts && posts.map((value) => <Post key={value.id} post={value}/>)}
        </div>
    );
};
