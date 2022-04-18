import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {UserPosts} from "../../components";
import {postsService} from "../../services";

export const UserPostPage = () => {
    const {userid} = useParams();

    const [posts, setPosts] = useState();

    useEffect(() => {
        postsService.getUserPost(userid).then(({data}) => setPosts(data))
    }, [userid])

    return (
        <div>
            {posts && posts.map(posts =><UserPosts key={posts.id} posts={posts}/>)}
        </div>
    );
};