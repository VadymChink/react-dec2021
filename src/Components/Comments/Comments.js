import React, {useEffect, useState} from 'react';
import {commentsService} from "../../service";
import {Comment} from "../Comment/Comment";
import './Comments.css'


export const Comments = () => {

    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getAllComments().then(comments => setComments(comments))
    }, [])

    return (
        <div className={'comments'}>
            {comments && comments.map((comment)=> <Comment key={comment.id} comment={comment}/> )}
        </div>
    );
};