import React, {useEffect, useState} from 'react';
import {carsService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar,setCarForUpdate,updatedCar}) => {

    const [cars,setCars] = useState(null);
    const [deleteById,setDeleteById] = useState(null);

    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars(data));
    },[deleteById]);

    useEffect(()=>{
        if (newCar){
            setCars(prevState =>[...prevState, newCar])
        }
    },[newCar])
    useEffect(()=>{
        if (updatedCar){
           const car = cars.find(car=>car.id === updatedCar.id);
            Object.assign(car,updatedCar);
            setCars([...cars])
        }
    },[cars,updatedCar])



    return (
        <div>
            {cars && cars.map((car) => <Car key={car.id} car={car} setDeleteById={setDeleteById} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};