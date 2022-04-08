import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";

export const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postsService.getPostsUserId(userId).then(({data}) => setPosts(data));
    }, [userId])
    return (
        <div>
            {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};