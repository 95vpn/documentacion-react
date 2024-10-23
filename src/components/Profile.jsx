import React from "react"

export function Profile() {
    const user = {
        name: 'Hedy Lamar',
        imageUrl: 'https://i.imgur.com/Xzivkg4.png',
        imageSize: 90,
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <img className="avatar" src={user.imageUrl} alt={'Photo of' + user.name} 
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        </div>
    )
}