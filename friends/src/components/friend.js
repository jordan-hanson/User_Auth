import React from 'react';
import '../App.css'


export const Friend = (props) => {
    console.log(props)

    return (
        <div className="container">
            <div className="friend-component">
                <div>
                    {props.friendArrayPass.name}
                </div>
                <div>
                    {props.friendArrayPass.age}
                </div>
                <div>
                    {props.friendArrayPass.email}
                </div>
            </div>
        </div>
    )
} 