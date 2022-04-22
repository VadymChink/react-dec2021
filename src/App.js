import {Cats, Dogs} from "./components";

function App() {

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Cats/>
            <Dogs/>
        </div>
    );
}

export default App;
