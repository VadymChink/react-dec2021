import {axiosService} from "./axios.service";
import {urls} from "../Constsnts";

export const postsService = {
    getPostsUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}