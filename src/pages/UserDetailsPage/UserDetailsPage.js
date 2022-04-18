import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {usersService} from "../../services";
import {UserDetails} from "../../components";

export const UserDetailsPage = () => {

    const {id} = useParams();

    const {state} = useLocation();

    const [user, setUser] = useState();

    useEffect(()=>{
        if (!state){
        usersService.getById(id).then((({data})=>setUser(data)))
        }else{
            setUser(state)
        }
    },[id,state])

    return (
        <div>
            {user && <UserDetails user={user} />}
            <Outlet/>
        </div>
    );
};