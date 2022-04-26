import {useSelector} from "react-redux";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(({user}) => user)
    return (
        <div>
            {users.map((value) => <User key={value.id} user={value} />)}
        </div>
    );
};

export {
    Users
};