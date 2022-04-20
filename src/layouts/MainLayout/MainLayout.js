import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import css from './MainLayout.module.css';
import {useAuth} from "../../hooks";

export const MainLayout = () => {
    const {user,logOut} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts?page=1'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                {user && <h1>{user} <button onClick={()=>logOut(()=>navigate('/'))}>LogOut</button></h1>}
            </div>
            <Outlet/>
        </div>
    );
};