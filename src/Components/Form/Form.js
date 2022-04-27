import {useRef} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const Form = () => {
    const name = useRef();
    const dispatch = useDispatch();

    const addUser = () => {
        const newUser = name.current.value;
        dispatch(userActions.add({user: newUser}))
        name.current.value = '';
    }
    return (
        <div>
            <input type="text" ref={name}/>
            <button onClick={() => addUser()}>save</button>
        </div>
    );
};

export {
    Form
};