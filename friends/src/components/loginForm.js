import React, { useState } from 'react'

import { axiosWithAuth } from '../utils/axioswithAuth'

export const LoginForm = (props) => {

    const [userValues, setUserValues] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        const newUser = {
            ...userValues,
            [e.target.name]: e.target.value
        }
        setUserValues(newUser)
    }

    const onSubmit = (e) => {
        // console.log(props)
        // console.log(userValues)
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', userValues)
            .then(res => {
                console.log(res.data.payload)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/protected')
                // window.location.href = '/friends'
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Friendbook</h1>
            <h3>Add your friends. Stay connected.</h3>
            <form onSubmit={onSubmit}>
                <input value={userValues.username} onChange={onChange} name="username" placeholder="Username"></input>
                <input value={userValues.password} onChange={onChange} name="password" placeholder="Password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}