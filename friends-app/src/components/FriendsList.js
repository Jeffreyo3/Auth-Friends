import React from 'react';
import axiosWithAuth from '../axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        FriendsList: []
    };

    // componentDidMount() {
    //     this.getData;
    // }

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                this.setState({
                    FriendsList: res.data.friends
                })
            })
            .catch(err => console.log("axiosWithAuth in FriendsList error: ", err));
    };

    formData = () => {
        const formattedData = [];
    }

    render() {
        return (
            <div className="friends-list">
                FriendsList.js
            </div>
        )
    }


}


export default FriendsList;