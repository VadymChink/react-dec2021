import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const commentsService = {
    getAll: ()=>axiosService.get(urls.comments)
}