import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, username} = user;
    const dispatch = useDispatch();
    return (
        <div>
            {id}--{username}
            <button onClick={() => dispatch(userActions.deleteUser({id}))}>delete</button>
        </div>
    );
};

export {
    User
}; 