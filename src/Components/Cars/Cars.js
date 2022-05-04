import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carsActions} from "../../redux";

const Cars = () => {
    const {cars,status,deleteCar,updatedCar} = useSelector((state) => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [dispatch])

    return (
        <div>
            {status && <h2>{status}</h2>}
            {updatedCar && <h3>Updated Car: {updatedCar.id}</h3>}
            {deleteCar && <h3>Deleted Car: {deleteCar}</h3>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};