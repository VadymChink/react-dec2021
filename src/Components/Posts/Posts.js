import React, {useEffect, useState} from 'react';
import {postsService} from "../../service";
import {Post} from "../Post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postsService.getAllPosts()
            .then(posts=>posts.slice(0,10))
            .then(posts => setPosts(posts))
    }, [])
    return (
        <div>
            { posts && posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};