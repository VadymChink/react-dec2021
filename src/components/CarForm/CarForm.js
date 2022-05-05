import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {
    const {handleSubmit, reset, register, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const submit = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.updateByIdAsync({id: carForUpdate.id, car}))
        } else {
            await dispatch(carActions.create({car}));
        }
        reset();
    }
    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            <div><label>price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export {
    CarForm
};