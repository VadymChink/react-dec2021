import {DELETEDog} from "../../reducers";

const Dog = ({dog,dispatch}) => {
    const {id, name} = dog;
    return (
        <div>
            {id}--{name}
            <button onClick={()=>dispatch({type:DELETEDog, payload:{id:id}})}>Delete</button>
        </div>
    );
};

export {
    Dog
};