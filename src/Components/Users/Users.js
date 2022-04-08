import React, {useEffect, useState} from 'react';
import {userService} from "../../service";
import {User} from "../User/User";
import './Users.css'

export const Users = () => {
    const [users,setUsers] = useState(null);

    useEffect(()=>{
            userService.getAllUser().then(value => setUsers(value))
        },[])
    return (
        <div className={'users'}>
            {
                users && users.map((value) => <User key={value.id} user={value}/>)

            }
        </div>
    );
};