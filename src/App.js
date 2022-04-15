import {CarForm} from "./components";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";

function App() {

    const [newCar,SetNewCar] = useState(null);
    const [carForUpdate,SetCarForUpdate] = useState(null);

    const [updatedCar,setUpdatedCar] = useState(null);

    return (
        <div>
            <CarForm SetNewCar={SetNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar}/>
            <br/>
            <Cars newCar={newCar} SetCarForUpdate={SetCarForUpdate} updatedCar={updatedCar}/>
        </div>
    );
}

export default App;
