import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: ()=>axiosService.get(urls.cars),
    create: (car)=> axiosService.post(urls.cars,car),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`),
    update:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar)
}

export {
    carsService
}