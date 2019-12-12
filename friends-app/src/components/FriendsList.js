import React from 'react';
import axiosWithAuth from '../axiosWithAuth';

import Form from './Form';


const FriendsList = (props) => {

    const [friends, setFriends] = React.useState([]);

    React.useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log("axiosWithAuth in FriendsList error: ", err));
    }, []);



    return(
        <>
            <Form />
            <div className="friends-list">
                {friends.map(amigo => (
                    <div key={amigo.id} className="friend">
                        <h2>{amigo.name}</h2>
                        <p>Age: {amigo.age}</p>
                        <p>Email: {amigo.email}</p>
                    </div>
                ))}
            </div>
        </>
    )
}



export default FriendsList;