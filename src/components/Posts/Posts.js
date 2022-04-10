import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";
import {Post} from "../";

export const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postsService.getPostsUserForID(userId).then(({data}) => setPosts(data));
    }, [userId])
    return (
        <div>
            {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};