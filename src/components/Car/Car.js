import {carsService} from "../../services";

export const Car = ({car, setCarDelete, setUpdateCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        setCarDelete(id)
    }
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>prise: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => deleteCar()}>delete</button>
            <button onClick={() => setUpdateCar(car)}>update</button>
        </div>
    );
};