import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

export const Comments = () => {
const [comments,setComments] = useState([]);
useEffect(()=>{
    commentsService.getAll().then(({data})=>data.slice(0,10)).then(data=>setComments(data))
},[])
    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};