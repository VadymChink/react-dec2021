import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {carsActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const {updatedCar,formErrors} = useSelector(state => state.cars);

    const submit = (car) => {
        if (updatedCar) {
            dispatch(carsActions.updateById({id:updatedCar.id,newCar:car}))
        } else {
            dispatch(carsActions.createCar({car}))
        }
        reset()
    }

    useEffect(() => {
        if (updatedCar) {
            const {model, price, year} = updatedCar;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [updatedCar,setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <div><label>price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            <div><label>year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            <button>{updatedCar ? 'update' : 'create'}</button>
        </form>
    );
};

export {
    CarForm
};