import React from 'react';

import styles from './User.module.css';

export const User = ({user,setUser,setUserIdForPosts}) => {
    const {id, name} = user;
    return (
        <div className={styles.df }>
            <div className={styles.w250px}>ID:{id} Name: {name}</div>
            <button className={styles.db} onClick={()=> {
                setUser(user)
                setUserIdForPosts(null)
            }}>Info User</button>
        </div>
    );
};