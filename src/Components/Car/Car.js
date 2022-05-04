import {useDispatch} from "react-redux";
import {carsActions} from "../../redux";

const Car = ({car,car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(carsActions.deleteById({id}))
    }
    return (
        <div>
            {id}--{model}--{price}--{year}
            <button onClick={deleteById}>delete</button>
            <button onClick={()=>dispatch(carsActions.updatedCar({car}))}>update</button>
        </div>
    );
};

export {
    Car
};