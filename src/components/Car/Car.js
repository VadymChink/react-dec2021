import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const deleteById = async () => {
        await dispatch(carActions.deleteAsync({id}))
    }
    return (
        <div>
            {id}--{model}--{price}--{year}
            <button onClick={deleteById}>delete</button>
            <button>update</button>
        </div>
    );
};

export {
    Car
};