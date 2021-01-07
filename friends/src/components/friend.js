import React from 'react';

export const Friend = (props) => {
    console.log(props)

    return (
        <div>
            <div>
                Friends Component to make
            </div>
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
    )
} 