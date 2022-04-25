import {Cats, Dogs} from "./Components";

function App() {
    return (
        <div style={{display:'flex', justifyContent:"space-evenly"}}>
            <Cats/>
            <Dogs/>
        </div>
    );
}

export default App;
