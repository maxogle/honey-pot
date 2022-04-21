import React, { useState } from 'react'

const UserCard = ({element}) =>{
    const [like,setLike]=useState(false)
    let likes = like ? "w0w" : "ew"
    return(
        <div className="user-card">
            <h1>{element.title}</h1>
            <img className="user-img" src={element.img} />
            <h2>{element.warning_message}</h2>
            <button onClick={
                (e)=> {
                    e.preventDefault()
                    setLike(!like)
                }
            }>{likes}</button>
        </div>
    )

}
export default UserCard 