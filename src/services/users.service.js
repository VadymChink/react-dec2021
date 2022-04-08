import {axiosService} from "./axios.service";
import {urls} from "../Constsnts";

export const usersService = {
    getAll: () => axiosService.get(urls.users)
}