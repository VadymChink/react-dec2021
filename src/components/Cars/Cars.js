import React, {useEffect, useState} from 'react';
import {carsService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar, SetCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState(null);

    const [idDeletedCar, setIdDeletedCar] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])
    useEffect(() => {
        if (idDeletedCar) {
            setCars(cars.filter(car => car.id !== idDeletedCar))
        }
    }, [idDeletedCar, cars])

    useEffect(() => {
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar)
            setCars([...cars])
        }
    }, [cars, updatedCar])
    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} setIdDeletedCar={setIdDeletedCar}
                                          SetCarForUpdate={SetCarForUpdate}/>)}
        </div>
    );
};