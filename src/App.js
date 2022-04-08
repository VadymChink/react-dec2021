import {useState} from "react";

import styles from './App.module.css';
import {Posts, UserInfo, Users} from "./Components";

function App() {
    const [user,setUser] = useState(null);
    const [userIdForPosts,setUserIdForPosts] = useState(null);
    return (
        <div>
            <div className={styles.df}>
                <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
                {user && <UserInfo user={user} setPost={setUserIdForPosts}/>}
            </div>
            { userIdForPosts && <Posts userId={userIdForPosts}/>}
        </div>);
}

export default App;
