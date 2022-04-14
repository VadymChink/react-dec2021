import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsValidator} from "../../validators";

export const CarForm = ({setNewCar, carForUpdate, setUpdatedCar, setCarForUpdate}) => {

    const {
        register,
        reset,
        setValue,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({resolver: joiResolver(carsValidator), mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [setValue, carForUpdate])
    const mySubmit = async (car) => {
        if (carForUpdate) {
            const {data} = await carsService.updateById(carForUpdate.id, car)
            setUpdatedCar(data);
            setCarForUpdate(false);

        } else {
            const {data} = await carsService.create(car);
            setNewCar(data);
        }
        reset();
    }
    const clearForm = () => {
        setCarForUpdate(false);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <br/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            {!!carForUpdate && <button onClick={clearForm}>clear form</button>}
        </form>
    );
};