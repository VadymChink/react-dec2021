import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: ()=>axiosService.get(urls.cars),
    create: (car)=>axiosService.post(urls.cars,car),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`)
}

export {
    carsService
}
