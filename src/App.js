import {useState} from "react";

import {CarForm, Cars} from "./components";

function App() {
    const [newCar, setNewCar] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} updateCar={updateCar} />
            <Cars newCar={newCar} setUpdateCar={setUpdateCar} />
        </div>
    );
}

export default App;
