import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {

    const {reset, handleSubmit, register} = useForm();

    const dispatch = useDispatch();

    const submit = async (newCar) => {
        await dispatch(carActions.createAsync({car:newCar}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            <div><label>price: <input type="text" {...register('price',{valueAsNumber:true})}/></label></div>
            <div><label>year: <input type="text" {...register('year',{valueAsNumber:true})}/></label></div>
            <button>save</button>
        </form>
    );
};

export {
    CarForm
};