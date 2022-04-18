import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAll: ()=> axiosService.get(urls.posts),
    getUserPosts:(id)=>axiosService(`${urls.posts}?userId=${id}`),
    getPostById:(id)=>axiosService(`${urls.posts}/${id}`)
}
export {
    postsService
}