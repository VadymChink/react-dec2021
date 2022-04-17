import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import {Comments} from "../../components/Comments/Comments";

export const CommentsPage = () => {
    const [comments,setComments] = useState(null);


    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments(data))
    },[])
    return (
        <div>
            {comments && <Comments comments={comments}/>}
        </div>
    );
};