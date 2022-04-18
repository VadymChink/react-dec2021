import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../../components";
import {usersService} from "../../services";

export const UserDetailsPage = () => {

    const {id} = useParams();

    const {state} = useLocation();

    const [user,setUser] = useState(null);

    useEffect(() => {
        if (!state){
        usersService.getById(id).then(({data}) => setUser(data))
        }else{
            setUser(state)
        }
    }, [id,setUser,state])

    return (
        <div>
            {user && <UserDetails state={user}/>}
            <Outlet/>
        </div>
    );
};