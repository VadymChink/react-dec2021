import React from 'react';

import styles from './UserInfo.module.css'
export const UserInfo = ({user, setPost}) => {
    const {id, name, username, email, phone, website} = user

    return (
        <div className={styles.df}>
            <div className={styles.card}>
                <div className={styles.el}>id: {id}</div>
                <div className={styles.el}>name: {name}</div>
                <div className={styles.el}>username: {username}</div>
                <div className={styles.el}>email: {email}</div>
                <div className={styles.el}>phone: {phone}</div>
                <div className={styles.el}>website: {website}</div>
            </div>
            <div>
                <button className={styles.btn} onClick={()=>setPost(id)}>Get Posts</button>
            </div>


        </div>
    );
};

