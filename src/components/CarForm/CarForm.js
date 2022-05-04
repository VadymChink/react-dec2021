import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {

    const {reset, handleSubmit, setValue, register} = useForm();

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateAsync({id: carForUpdate.id,newCar}))
        } else {
            await dispatch(carActions.createAsync({car: newCar}))
        }
        reset()
    }
    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [setValue, carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            <div><label>price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>save</button>
        </form>
    );
};

export {
    CarForm
};