import React from 'react';
import axiosWithAuth from '../axiosWithAuth';

const Form = (props) => {
    const [newFriend, setNewFriend] = React.useState({
        id: null,
        name: '',
        age: null,
        email: ''
    });

    const addFriend = (friend) => {
        return axiosWithAuth()
            .post("/friends", friend)
            .then(res => console.log(res))
            .catch(err => console.log("addFriend in Form error: ", err))
    };

    const handleSubmit = e => {
        e.preventDefault();
        const friend = {
            id: Date.now(),
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email
        };

        addFriend(friend)
            .then(window.location.reload())

    };

    const handleChanges = e => {
        setNewFriend({
            ...newFriend, [e.target.name] : e.target.value
        })
    }

    return (

    <div>
        <form>
            <input name="name" type="text" placeholder="Friend's Name" onChange={handleChanges}></input>
            <input name="age" type="text" placeholder="Friend's Age" onChange={handleChanges}></input>
            <input name="email" type="email" placeholder="Friend's Email" onChange={handleChanges}></input>
            <button type="submit" onClick={handleSubmit}>Submit Your Friend !</button>
        </form>
    </div>

    )


}

export default Form;