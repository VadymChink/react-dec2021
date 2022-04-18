import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../services";
import {PostDetails} from "../../components";

export const PostDetailsPage = () => {

    const {id} = useParams();

    const {state} = useLocation();

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (!state){
        postsService.getPostById(id).then(({data}) => setPost(data))
        }else{
            setPost(state)
        }

    }, [id,state])
    return (
        <div>
            {post &&  <PostDetails post={post}/>}
            <Outlet/>
        </div>
    );
};