import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carsService = {
    getAll:()=>axiosService.get(urls.cars), //1
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars, car), //1
    updateById:(id,newCar)=>axiosService.put(`${urls.cars}/${id}`,newCar), //1
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`) //1
};