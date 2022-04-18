import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../services";
import {PostComment} from "../../components";

export const CommentsPage = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getCommentsByPostId(id).then(({data}) => setComments(data))
    }, [id])
    return (
        <div>
            {comments.map(comment=><PostComment key={comment.id} comment={comment} />)}
        </div>
    );
};