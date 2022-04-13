import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../services";
import {carValidator} from "../../validators";
import {useEffect} from "react";

export const CarForm = ({setNewCar, updateCar}) => {

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });

    useEffect(() => {
        if (updateCar) {
            const {model,price,year } = updateCar
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    }, [updateCar])
    // const [formError, setFormError] = useState({});

    const mySubmit = async (car) => {
        // try {
        if (updateCar){
            await carsService.updateById(updateCar.id,car);

        }else {
        const {data} = await carsService.create(car);
        setNewCar(data);
        reset();
        }
        // } catch (e) {
        //     setFormError(e.response.data);
        // }
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {/*{formError.model &&<span>{formError.model[0]}</span>}*/}
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {/*{formError.price &&<span>{formError.price[0]}</span>}*/}
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {/*{formError.year &&<span>{formError.year[0]}</span>}*/}
            {errors.year && <span>{errors.year.message}</span>}
            <button>save</button>
        </form>
    );
};