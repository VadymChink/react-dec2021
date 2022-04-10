import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const postsService = {
    getPostsUserForID: (id)=> axiosService.get(`${urls.posts}?userId=${id}`)
}