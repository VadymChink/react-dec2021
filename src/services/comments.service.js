import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService ={
    getCommentsByPostId: (id)=> axiosService.get(`${urls.comments}?postId=${id}`)
}
export {
    commentsService
}