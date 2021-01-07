import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Friend } from './friend'
// import { axiosWithAuth } from '../utils/axioswithAuth'
// import axios from 'axios';


export const Friends = () => {
    const [friendsArray, setFriendsArray] = useState([])

    const friendData = friendsArray.map(function (friend) {
        console.log(friend)
        return friend
    })
    console.log(friendData)
    const token = localStorage.getItem('token')

    const deleteToken = () => {
        localStorage.removeItem('token')
    }

    const getData = () => {

        axios.get('http://localhost:5000/api/friends', {
            headers: { authorization: token }
        })
            .then(res => {
                console.log(res.data)
                setFriendsArray(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>
                Friends Page
            <Link to="/login" onClick={deleteToken}>LogOut</Link>
            </div>
            <div className="friends-container">
                <button onClick={getData}>Fetch Your Friends</button>
            </div>
            <div>
                {friendsArray.map(friend => (
                    <Friend
                        key={friend.id}
                        friendArrayPass={friend}
                    />
                ))}
            </div>
        </div>
    )
}