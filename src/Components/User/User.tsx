import {IUser} from "../../interfaces";
import {FC} from "react";

interface IProps {
    user:IUser
}

const User:FC<IProps> = ({user:{id,name,username,email}}) => {


    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {
    User
};