import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../services";
import {carValidator} from "../../validators";

export const CarForm = ({SetNewCar,carForUpdate,setUpdatedCar}) => {

    const {register, reset,setValue, handleSubmit,formState:{errors}} = useForm({resolver:joiResolver(carValidator),mode:"onTouched"});


    useEffect(()=>{
        if (carForUpdate){
            const {model,price,year} = carForUpdate;

            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    },[carForUpdate,setValue])

    const mySubmit =async (car) => {
        if (carForUpdate){
            const {data} = await carsService.updateById(carForUpdate.id,car);
            setUpdatedCar(data);
        }else {
            const {data} = await carsService.create(car);
            SetNewCar(data);
        }
        reset();
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price',{valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year',{valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>save</button>
        </form>
    );
};