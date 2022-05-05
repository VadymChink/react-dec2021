import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarDetails = ({car,car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteById = () => {
        dispatch(carActions.deleteByIdAsync({id}))
        navigate('/cars')
    }
    const updateById = () => {
        dispatch(carActions.carForUpdate({car}))
        navigate('/cars')
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteById}>delete</button>
            <button onClick={updateById}>update</button>
        </div>
    );
};

export {
    CarDetails
};