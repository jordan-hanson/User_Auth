import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axioswithAuth'
// import axios from 'axios';


export const Friends = () => {
    const token = localStorage.getItem('token')

    const deleteToken = () => {
        localStorage.removeItem('token')
    }

    const getData = () => {

        axios.get('http://localhost:5000/api/friends', {
            headers: { authorization: token }
        })
            .then(res => {
                console.log(res)
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
        </div>
    )
}