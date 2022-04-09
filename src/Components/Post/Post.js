import styles from './Post.module.css'
export const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div className={styles.post}>
            <div>UserID: {userId}</div>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};
