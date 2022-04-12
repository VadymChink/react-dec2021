import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar}) => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars(data));
    },[])

    useEffect(()=>{
        if (newCar){
            setCars(prevState => [...prevState,newCar]);
        }
    },[newCar])
    return (
        <div>
            {cars.map((car) => <Car key={car.id} car={car}/>)}
        </div>
    );
};