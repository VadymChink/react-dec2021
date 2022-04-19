import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAll: (page,_limit = 2)=> axiosService.get(urls.posts,{
        params:{
            _start:(page-1)*_limit,
            _limit
        }
    }),
    getUserPosts:(id)=>axiosService(`${urls.posts}?userId=${id}`),
    getPostById:(id)=>axiosService(`${urls.posts}/${id}`)
}
export {
    postsService
}