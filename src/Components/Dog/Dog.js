import {useDispatch} from "react-redux";
import {dogsActions} from "../../redux";

const Dog = ({dog}) => {
    const {id, dogName} = dog
    const dispatch = useDispatch();
    return (
        <div>
            {id} -- {dogName}
            <button onClick={() => dispatch(dogsActions.setDogForUpdate({dog}))}>update</button>
            <button onClick={() => dispatch(dogsActions.delDog({id}))}>delete</button>
        </div>
    );
};

export {
    Dog
};