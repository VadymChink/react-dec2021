import {useDispatch} from "react-redux";
import {userAction} from "../../redux";

const User = ({user:{id,user}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {id}--{user}
            <button onClick={()=>dispatch(userAction.deleteUser(id))}>Delete</button>
        </div>
    );
};
export {
    User
};