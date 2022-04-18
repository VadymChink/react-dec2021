import React, {useEffect, useState} from 'react';
import {UserPosts} from "../../components";
import {useParams} from "react-router-dom";
import {postsService} from "../../services";

export const UserPostsPage = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
      postsService.getUserPosts(id).then(({data})=>setPosts(data))
    }, [id])

    return (
        <div>
            {posts && posts.map((post) => <UserPosts key={post.id} post={post}/>)}
        </div>
    );
};
