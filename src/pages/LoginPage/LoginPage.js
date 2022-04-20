import {useRef} from "react";
import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const name = useRef();
    const navigate = useNavigate();
    const {state} = useLocation();
    const {logIn} = useAuth();

    const login = () => {
        const userName = name.current.value;
        logIn(userName, () => navigate(state.pathname,{replace:true}));
    }
    return (
        <div>
            <input type="text" ref={name} placeholder={'name'}/>
            <button onClick={() => login()}>login</button>
        </div>
    );
};

export {
    LoginPage
};