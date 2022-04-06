import './App.css';

import {Comments, Posts, Users} from './Components';

function App() {
    return (
        <div className={'wrapper'}>
            <div className={'wrap'}>
                <Users/>
                <hr/>
                <Posts/>
                <hr/>
            </div>
            <div className={'comments'}>
            <Comments/>
            </div>
        </div>
    );
}

export default App;
