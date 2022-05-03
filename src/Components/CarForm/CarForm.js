import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../reduser";

const CarForm = () => {
    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();
    const {formErrors} = useSelector(({cars}) => cars);

    const submit = async (newCar) => {
        await dispatch(carsActions.createAsync({car: newCar}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <div><label>Price: <input type="text"{...register('price', {valueAsNumber: true})}/></label></div>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            <div><label>Year: <input type="text"{...register('year', {valueAsNumber: true})}/></label></div>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            <div><button>save</button></div>
        </form>
    );
}

export {
    CarForm
};