import {AxiosResponse} from "axios";

import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

type Res<T> = Promise<AxiosResponse<T>>

const userService = {
    getAll:():Res<IUser[]>=> axiosService.get(urls.users),
    getByID:(id:number)=> axiosService.get(`${urls.users}/${id}`)
}

export {
    userService
}