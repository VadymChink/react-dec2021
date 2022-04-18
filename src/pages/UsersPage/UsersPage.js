import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {usersService} from "../../services";
import {User} from "../../components";

export const UsersPage = () => {

    const [users,setUsers] = useState(null);

    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data));
    },[])
    return (
        <div style={{display:"flex"}}>
            <div>{users && users.map((user) => <User key={user.id} user={user}/>)}</div>
            <Outlet/>
        </div>
    );
};