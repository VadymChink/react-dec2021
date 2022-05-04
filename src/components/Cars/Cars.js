import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars, status} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    return (
        <div>
            {status && <h2>{status}</h2>}
            {cars.map((car) => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};