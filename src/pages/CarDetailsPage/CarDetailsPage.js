import {CarDetails} from "../../components/CarDetails/CarDetails";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {carService} from "../../services";

const CarDetailsPage = () => {

    const [car, setCar] = useState();
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getByID(id).then(({data}) => setCar(data));
        }
    }, [state,id])

    return (
        <div>
            {car && <CarDetails car={car}/>}
        </div>
    );
};

export {
    CarDetailsPage
};