import './User.css'

export const User = ({user}) => {
    const {id, name, username, email, phone} = user
    return (
        <div className={'user'}>
            <div>
                <h4>User ID: {id}</h4>
                <h3>{name} {username}</h3>
            </div>
            <div>{phone} {email}</div>
        </div>
    );
};

