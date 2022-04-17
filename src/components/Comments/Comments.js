import React from 'react';
import {CommentsByIdPost} from "../CommentsByIdPost/CommentsByIdPost";
import {useParams} from "react-router-dom";

export const Comments = ({comments}) => {

    const {id} = useParams();

    const commentsByPost = comments.filter(value => value.postId.toString() === id);

    return (
        <div>
            {commentsByPost.map((comment) => <CommentsByIdPost key={comment.id} comment={comment}/>)}
        </div>
    );
};





