import {useState} from "react";

import {CarForm, Cars} from "./components";

function App() {
const [newCar,setNewCar] = useState({});
    return (
        <div>
            <CarForm setNewCar={setNewCar}/>
            <Cars newCar={newCar}/>
        </div>
    );
}

export default App;
