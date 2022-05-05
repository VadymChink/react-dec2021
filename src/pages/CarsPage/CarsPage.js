import {Cars} from "../../components";
import {Outlet} from "react-router-dom";

const CarsPage = () => {

    return (
        <div style={{display:"flex"}}>
            <Cars/>
            <Outlet/>
        </div>
    );
};

export {
    CarsPage
};