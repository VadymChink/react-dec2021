import React from 'react';
import {carsService} from "../../services";

export const Car = ({car,setIdDeletedCar,SetCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteById = async () => {
      await carsService.deleteById(id);
        setIdDeletedCar(id);
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>deleteById()}>delete</button>
            <button onClick={()=>SetCarForUpdate(car)}>update</button>
        </div>
    );
};