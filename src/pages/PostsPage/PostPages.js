import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";

export const PostPages = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        postsService.getAll().then(({data})=>setPosts(data))
    },[])
    return (
        <div style={{display:"flex"}}>
            <div>{posts.map((post) => <Post key={post.id} post={post}/>)}</div>
            <Outlet/>
        </div>
    );
};