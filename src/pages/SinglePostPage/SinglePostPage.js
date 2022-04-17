import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../services";
import {PostDetails} from "../../components";

export const SinglePostPage = () => {
    const {state} = useLocation();

    const {id} = useParams();

    const [post,setPost] = useState(null);
    
    useEffect(()=>{
        if (!state){
        postsService.getById(id).then(({data})=>setPost(data))
        }else {
            setPost(state)
        }
    },[id,state])
    
    return (
        <div>
            {post && <PostDetails post={post}/>}
            <Outlet/>
        </div>
    );
};