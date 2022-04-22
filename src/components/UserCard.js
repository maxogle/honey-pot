import React, { useState } from 'react'

const UserCard = ({element}) =>{
    const [like,setLike]=useState(false)
    let likes = like ? "w0w" : "ew"
    const toggleLike = () => {
        setLike(!like)
    }
    return(
        <div className="user-card">
            <h1>{element.title}</h1>
            <img className="user-img" src={element.img} />
            <h2>{element.warning_message}</h2>
            {
                like ? <img className="like-btn" src="DisLikeButton.png" alt="a-sad-kitty" onClick={toggleLike}/> : <img className="like-btn" src="LikeButton.png" alt="a-happy-kitty" onClick={toggleLike}/> 
            }
        </div>
    )

};


export default UserCard