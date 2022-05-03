import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {useEffect} from "react";
import {carsActions} from "../../reduser";

const Cars = () => {
    const {cars, status} = useSelector(({cars}) => cars);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(carsActions.getAll())
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