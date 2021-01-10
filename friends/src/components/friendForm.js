import React, { useState } from 'react';
import axios from 'axios';
import e from 'cors';
// import e from 'cors';

export const FriendForm = () => {
    const [friendValues, setFriendValues] = useState({
        name: '',
        age: 0,
        email: '',
    })
    const onChange = (e) => {
        const newFriend = {
            ...friendValues,
            [e.target.name]: e.target.value,
        }
        console.log(newFriend)
        setFriendValues(newFriend)
    }
    const onSubmit = () => {
        e.preventDefault()
        console.log('about to save the new friend')
        axios.post('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>Add a new Friend</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={friendValues.name} name="name" placeholder="name"></input>
                <input onChange={onChange} value={friendValues.age} name="age" placeholder="age"></input>
                <input onChange={onChange} value={friendValues.email} name="email" placeholder="email"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}