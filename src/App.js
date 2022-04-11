import  './APP.css'
import {Comments, Posts, Users} from "./components";

function App() {
    return (
        <div className={'wrap'}>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;