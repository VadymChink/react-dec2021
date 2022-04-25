
import {DELETECat} from '../../reducers'

const Cat = ({cat,dispatch}) => {
    const {id,name} = cat;
    return (
        <div>
            {id}--{name}
            <button onClick={()=>dispatch({type:DELETECat,payload: {id:id}})} >Delete</button>
        </div>
    );
};

export {
    Cat
};