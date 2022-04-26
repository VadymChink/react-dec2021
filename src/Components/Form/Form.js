import {useRef} from "react";
import {useDispatch} from "react-redux";
import {userAction} from "../../redux";

const Form = () => {
    const name = useRef();
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" ref={name} placeholder={'User name'}/>
            <button onClick={()=>dispatch(userAction.add({user:name.current.value}))}>Save</button>
        </div>
    );
};

export {
    Form
};