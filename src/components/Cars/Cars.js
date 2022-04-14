import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar,setUpdateCar}) => {
    const [cars, setCars] = useState([]);

    const [carDelete, setCarDelete] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [newCar])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar]);
        }
    }, [newCar])

    useEffect(() => {
        if (carDelete) {
            setCars(cars.filter(car => car.id !== carDelete))
        }
    }, [carDelete,cars])

    return (
        <div>
            {cars.map((car) => <Car key={car.id} car={car} setCarDelete={setCarDelete} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};
